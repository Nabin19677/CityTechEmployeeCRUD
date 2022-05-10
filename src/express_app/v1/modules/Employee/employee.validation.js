import { check } from "express-validator";

export const bodyValidator = () => {
  return [
    check("firstName")
      .notEmpty()
      .withMessage("Please provide firstName")
      .bail(),

    check("lastName").notEmpty().withMessage("Please provide lastName").bail(),
    check("salary").notEmpty().withMessage("Please provide salary").bail(),
    check("jobTitle").notEmpty().withMessage("Please provide jobTitle").bail(),
  ];
};
