// Auth models

import UserModel from "./auth/UserModel.js";
import TokenModel from "./auth/TokenModel.js";

// Restaraunt models

import CommentModel from "./restaraunt/CommentModel.js";
import DishModel from "./restaraunt/DishModel.js";
import PlaceModel from "./restaraunt/PlaceModel.js";
import RatingModel from "./restaraunt/RatingModel.js";
import RestarauntModel from "./restaraunt/RestarauntModel.js";
import ScheduleModel from "./restaraunt/ScheduleModel.js";

// Rmage model

import ImageModel from "./ImageModel.js";

export default {
  // Auth models
  UserModel,
  TokenModel,
  // Restaraunt models
  CommentModel,
  DishModel,
  PlaceModel,
  RatingModel,
  RestarauntModel,
  ScheduleModel,
  // Image model
  ImageModel,
};
