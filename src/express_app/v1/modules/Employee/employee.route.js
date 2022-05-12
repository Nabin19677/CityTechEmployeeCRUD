import express from "express";
import {
  getEmployee,
  getAllEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "./employee.controller.js";

//Validators
import employeeRouteValidation from "./employee.validation.js";

const Router = express.Router();

Router.route("/")
  .get(employeeRouteValidation("body"), getAllEmployee)
  .post(createEmployee);
Router.route("/:employeeId")
  .get(getEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

export default Router;
