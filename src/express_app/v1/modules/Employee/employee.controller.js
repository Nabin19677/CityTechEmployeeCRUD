export const getEmployee = async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    const employees = await req.models.EmployeeModel.find({ _id: employeeId });
    res.json({
      employees,
    });
  } catch (e) {
    next(e);
  }
};
export const getAllEmployee = async (req, res, next) => {
  try {
    const employees = await req.models.EmployeeModel.find();
    res.json({
      employees,
    });
  } catch (e) {
    next(e);
  }
};
export const createEmployee = async (req, res, next) => {
  try {
    const { EmployeeModel } = req.models;
    const newEmployee = new EmployeeModel(req.body);
    newEmployee.save();
    res.json(newEmployee);
  } catch (e) {
    next(e);
  }
};
export const updateEmployee = async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    const updatedEmployee = await req.models.EmployeeModel.findOneAndUpdate(
      {
        _id: employeeId,
      },
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedEmployee);
  } catch (e) {
    next(e);
  }
};
export const deleteEmployee = async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    const employee = await req.models.EmployeeModel.deleteOne({
      _id: employeeId,
    });
    res.json(employee);
  } catch (e) {
    next(e);
  }
};
