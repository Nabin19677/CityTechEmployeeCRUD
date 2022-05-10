import express from "express";
import { validationResult } from "express-validator";

const app = express();

/**
 * validationChain -> chain[]
 */
export const catchValidationErrors = (validationChain) => {
  return app.use(validationChain, (req, res, next) => {
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  });
};

const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
  // Build your resulting errors however you want! String, object, whatever - it works!
  return `${location}[${param}]: ${msg}`;
};
