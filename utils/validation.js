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

export const userValidationLogin = Joi.object({
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

export const userValidationToken = Joi.object({
  query: Joi.object({
    token: Joi.string().required(),
  }),
});
