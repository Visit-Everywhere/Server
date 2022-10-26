import tokenService from "./TokenService.js";

import { ForbiddenError } from "#utils/errors";

export default (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const tokenHeader = req.headers.authorization
    if (!tokenHeader) {
      throw new ForbiddenError(403, "You are not authorized!");
    }
    const token = tokenHeader.split("")[1]
    if (!token) {
      throw new ForbiddenError(403, "You are not authorized!");
    }
    const userData = tokenService.validateAccessToken(token);
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
