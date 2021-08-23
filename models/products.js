const { addNewProduct } = require("../controllers/products");
const db = require("../helpers/connection");
const { success, serverErr } = require("../helpers/ResponseFormat");
const {
  getProduct,
  getAllProduct,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
  countAll,
} = require("../repository/products");

const ProductsModel = {
  getProduct: ({ limit = 100, page = 1 }) => {
    return new Promise((resolve, reject) => {
      db.connect().then((client) => {
        client
          .query(getProduct({ limit, page }))
          .then((res) => {
            client.release(true);
            db.connect().then((client) => {
              client
                .query(countAll())
                .then((count) => {
                  client.release(true);
                  console.log(count.rows);
                  resolve(
                    success({
                      products: res.rows,
                      pages: page,
                      total_page: Math.floor(
                        parseInt(count.rows[0].count) / limit
                      ),
                    })
                  );
                })
                .catch((err) => {
                  client.release(true);
                  reject(serverErr(err.message));
                });
            });
          })
          .catch((err) => {
            client.release(true);
            reject(serverErr(err.message));
          });
      });
    });
  },

  getAllProduct: () => {
    return new Promise((resolve, reject) => {
      db.connect().then((client) => {
        client
          .query(getAllProduct())
          .then((res) => {
            client.release(true);
            resolve(success(res.rows));
          })
          .catch((err) => {
            client.release(true);
            reject(serverErr(err.message));
          });
      });
    });
  },

  addNewProduct: (request) => {
    return new Promise((resolve, reject) => {
      db.connect().then((client) => {
        client
          .query(addProduct(request))
          .then((res) => {
            client.release(true);
            resolve(success(res.rows));
          })
          .catch((err) => {
            client.release(true);
            reject(serverErr(err.message));
          });
      });
    });
  },

  updateProduct: (request) => {
    return new Promise((resolve, reject) => {
      db.connect().then((client) => {
        client
          .query(getProductById(request))
          .then((res) => {
            client.release(true);
            db.connect().then((client) => {
              client
                .query(updateProduct(request, res.rows[0]))
                .then((res) => {
                  client.release(true);
                  resolve(success({}));
                })
                .catch((err) => {
                  client.release(true);
                  reject(serverErr(err.message));
                });
            });
          })
          .catch((err) => {
            client.release(true);
            reject(serverErr(err.message));
          });
      });
    });
  },

  deleteProduct: (request) => {
    return new Promise((resolve, reject) => {
      db.connect().then((client) => {
        client
          .query(deleteProduct(request))
          .then((res) => {
            client.release(true);
            resolve(success({}));
          })
          .catch((err) => {
            client.release(true);
            reject(serverErr(err.message));
          });
      });
    });
  },
};

module.exports = ProductsModel;
