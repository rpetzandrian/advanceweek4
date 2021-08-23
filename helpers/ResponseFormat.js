exports.template = (message, status, data, err) => {
  return { message, status, data, err };
};

exports.success = (data) => {
  return this.template(this.message.SUCCESS, this.code.OK, data);
};

exports.created = () => {
  return this.template(this.message.CREATED, this.code.CREATED, {});
};

exports.serverErr = (err) => {
  return this.template(
    this.message.SERVER_ERROR,
    this.code.SERVER_ERROR,
    {},
    err
  );
};

exports.invalid = (err) => {
  return this.template(this.message.FAILED, this.code.INVALID_REQUEST, {}, err);
};

exports.code = {
  OK: 200,
  INVALID_REQUEST: 400,
  SERVER_ERROR: 500,
  CREATED: 201,
};

exports.message = {
  SUCCESS: "Success!",
  INVALID: "Invalid request!",
  SERVER_ERROR: "Server error!",
  CREATED: "Created!",
};
