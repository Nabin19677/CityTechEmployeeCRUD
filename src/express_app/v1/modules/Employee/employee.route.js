import express from "express";
import {
  getEmployee,
  getAllEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "./employee.controller.js";

const Router = express.Router();

Router.route("/").get(getAllEmployee).post(createEmployee);
Router.route("/:employeeId")
  .get(getEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

export default Router;
