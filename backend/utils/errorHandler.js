const ErrorHandler = (err, req, res, next) => {
  console.log("Handling Error");
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.ENVIROMENT === "development" ? err.stack : {},
  });
};
module.exports = {
  ErrorHandler,
};
