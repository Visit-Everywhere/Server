import Validation from "#utils/validation";
import { ValidationError } from "#utils/errors";

export default (req, res, next) => {
  try {
    const answer = Validation(req.method, req.url, req.body)
    if (answer?.error) throw answer.error;
    return next();
  } catch (error) {
    return next(new ValidationError(400, error.message));
  }
};
