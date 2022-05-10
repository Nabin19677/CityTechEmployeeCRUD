import express from "express";

//modules
import EmployeeRouter from "./modules/Employee/employee.route.js";

const v1App = express();

v1App.use("/employee", EmployeeRouter);

export default v1App;
