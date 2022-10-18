import Joi from "joi";

export const userValidationRegister = Joi.object({
  body: Joi.object({
    username: Joi.string().required().max(15).alphanum(),
    password: Joi.string().required().min(4),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    gender: Joi.string().valid("male", "female").required(),
  }),
});
export const userValidationCode = Joi.object({
  body: Joi.object({
    code: Joi.string().required().length(6),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
  }),
});
export const userValidationLogin = Joi.object({
  body: Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().required(),
  }),
});

export const userValidationToken = Joi.object({
  query: Joi.object({
    token: Joi.string().required(),
  }),
});
