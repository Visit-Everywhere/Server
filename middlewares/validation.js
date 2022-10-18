import { userValidationRegister, userValidationLogin, userValidationToken, userValidationCode, userValidationRestoreEmail, userValidationRestoreCode, userValidationRestorePassword } from "#utils/validation";
import { ValidationError } from "#utils/errors";

export default (req, res, next) => {
  try {
    // register validation errors
    if (req.method === "POST" && req.url == "/register") {
      const { error } = userValidationRegister.validate({ body: req.body });
      if (error) throw error;
    }
    if (req.method === "POST" && req.url == "/checkCode") {
      const { error } = userValidationCode.validate({ body: req.body });
      if (error) throw error;
    }

    // login validation errors
    if (req.method === "POST" && req.url == "/login") {
      const { error } = userValidationLogin.validate({ body: req.body });
      if (error) throw error;
    }

    // restore password errors
    if (req.method === "POST" && req.url == "/restoreEmail") {
      const { error } = userValidationRestoreEmail.validate({ body: req.body });
      if (error) throw error;
    }
    if (req.method === "POST" && req.url == "/restoreCode") {
      const { error } = userValidationRestoreCode.validate({ body: req.body });
      if (error) throw error;
    }
    if (req.method === "POST" && req.url == "/restorePassword") {
      const { error } = userValidationRestorePassword.validate({ body: req.body });
      if (error) throw error;
    }

    if (req.method === "GET" && req.url == "/checkToken") {
      const { error } = userValidationToken.validate({ query: req.query });
      if (error) throw error;
    }
    return next();
  } catch (error) {
    return next(new ValidationError(400, error.message));
  }
};
