import Express, { NextFunction } from "express";
import Joi from "joi";
import Logger from "../../lib/logger";

const schema = Joi.object({
  value: Joi.number().integer().required(),
});

const validateNumberParam = async (
  request: Express.Request,
  response: Express.Response,
  next: NextFunction,
) => {
  const { error } = schema.validate(request.params);

  if (error) {
    Logger.error(`validateNumberParam middleware error: ${error.message}`);
    return response.status(400).json({ message: error.message }).send();
  }

  next();
};

export default validateNumberParam;
