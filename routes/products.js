const express = require("express");
const router = express.Router();
const {
  getProduct,
  getAllProduct,
  addNewProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products");
const {
  getProductRequest,
  addProductrequest,
  updateProductRequest,
} = require("../middlewares/ProductRequest");
const { upload } = require("../middlewares/Upload");

router.get("/", getProductRequest, getProduct);
router.get("/all", getAllProduct);
router.post("/", upload, addProductrequest, addNewProduct);
router.patch("/:id", upload, updateProductRequest, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
