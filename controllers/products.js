const {
  getProduct,
  getAllProduct,
  addNewProduct,
  deleteProduct,
  updateProduct,
} = require("../models/products");

const ProductsController = {
  getProduct: async (req, res) => {
    try {
      let result = await getProduct(req.request);
      res.status(result.status).send(result);
    } catch (err) {
      res.status(err.status).send(result);
    }
  },

  getAllProduct: async (req, res) => {
    try {
      let result = await getAllProduct();
      res.status(result.status).send(result);
    } catch (err) {
      res.status(err.status).send(result);
    }
  },

  addNewProduct: async (req, res) => {
    try {
      let result = await addNewProduct(req.request);
      res.status(result.status).send(result);
    } catch (err) {
      res.status(err.status).send(result);
    }
  },

  updateProduct: async (req, res) => {
    try {
      let result = await updateProduct(req.request);
      res.status(result.status).send(result);
    } catch (err) {
      res.status(err.status).send(result);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      let result = await deleteProduct(req.params);
      res.status(result.status).send(result);
    } catch (err) {
      res.status(err.status).send(result);
    }
  },
};

module.exports = ProductsController;
