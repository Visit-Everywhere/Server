import jwt from "#utils/jwt";
import { ForbiddenError } from "#utils/errors";

export default (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split("")[1];
    if (!token) {
      throw new ForbiddenError(403, "You are not authorized!");
    }
    const userData = jwt.verifyAccess(token);
    if (!userData) {
      throw new ForbiddenError(403, "You are not authorized!");
    }
    req.user = userData;
    next;
  } catch (err) {
    console.log(err);
    throw new ForbiddenError(403, "You are not authorized!");
  }
};
