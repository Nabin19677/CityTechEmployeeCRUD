import { check } from "express-validator";
import { catchValidationErrors } from "../../../../utils/validation.js";

const bodyValidatorChain = [
  check("firstName").notEmpty().withMessage("Please provide firstName").bail(),
  check("lastName").notEmpty().withMessage("Please provide lastName").bail(),
  check("salary").notEmpty().withMessage("Please provide salary").bail(),
  check("jobTitle").notEmpty().withMessage("Please provide jobTitle").bail(),
];

export default (validatorName) => {
  let validationChain;
  switch (validatorName) {
    case "body":
      validationChain = bodyValidatorChain;
      break;
    default:
      return [];
  }
  return [...validationChain, catchValidationErrors];
};
