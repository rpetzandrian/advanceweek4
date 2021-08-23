exports.getProductRequest = (req, res, next) => {
  req.request = {
    limit: req.query.limit,
    page: req.query.page,
  };
  next();
};

exports.addProductrequest = (req, res, next) => {
  req.request = {
    ...req.body,
    images: req.file ? `/uploads/${req.file.filename}` : undefined,
  };
  next();
};

exports.updateProductRequest = (req, res, next) => {
  req.request = {
    ...req.params,
    ...req.body,
    images: req.file ? `/uploads/${req.file.filename}` : undefined,
  };
  next();
};
