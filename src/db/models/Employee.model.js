import mongoose from "mongoose";

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  employeeId: {
    type: Number,
  },
  salary: {
    type: Number,
    required: true,
  },
  hireDate: {
    type: Date,
  },
  jobTitle: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Employee", EmployeeSchema);
