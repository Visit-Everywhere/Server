import Joi from "joi";

export default function (method, url, body) {
  if (method === "POST") {
    // register validation errors
    if (url == "/register") {
      const { error } = userValidationRegister.validate({ body });
      if (error) throw error;
    } else if (url == "checkCode") {
      const { error } = userValidationCode.validate({ body });
      if (error) throw error;
    }
    // login validation errors
    else if (url == "/login") {
      const { error } = userValidationLogin.validate({ body });
      if (error) throw error;
    }
    // restore password errors
    else if (url == "/restore/email") {
      const { error } = userValidationRestoreEmail.validate({ body });
      if (error) throw error;
    } else if (url == "/restore/code") {
      const { error } = userValidationRestoreCode.validate({ body });
      if (error) throw error;
    }
  } else if (method === "PUT") {
    // restore password errors
    if (url == "/restore/password") {
      const { error } = userValidationRestorePassword.validate({ body });
      if (error) throw error;
    }
  } else if (method === "DELETE") {
    // the route does not exist now
  }
}

// register validation
const userValidationRegister = Joi.object({
  body: Joi.object({
    username: Joi.string().required().max(15).alphanum(),
    password: Joi.string().required().min(4),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
  }),
});
const userValidationCode = Joi.object({
  body: Joi.object({
    code: Joi.string().required().length(6),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
  }),
});

// login validation
const userValidationLogin = Joi.object({
  body: Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().required(),
  }),
});

// restore password validation
const userValidationRestoreEmail = Joi.object({
  body: Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
  }),
});
const userValidationRestoreCode = Joi.object({
  body: Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    code: Joi.string().required().length(6),
  }),
});
const userValidationRestorePassword = Joi.object({
  body: Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().required(),
    confirm: Joi.string().valid(Joi.ref("password")).required(),
  }),
});
