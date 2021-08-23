const ProductsRouter = require("./products");

const route = (app, prefix) => {
  app.use(`${prefix}/products`, ProductsRouter);
};

module.exports = route;
