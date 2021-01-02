const employeeCtrl = {};

// Mongoose
const Employee = require("../models/Employee");

employeeCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

employeeCtrl.createEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();

  res.json({ status: "employee created" });
};

employeeCtrl.getEmployee = async (req, res) => {
  const employee = await Employee.findOne({ _id: req.params.id });
  res.send(employee);
};

employeeCtrl.editEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: "employee updated" });
};

employeeCtrl.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete({ _id: req.params.id });
  res.json({ status: "employee deleted" });
};

module.exports = employeeCtrl;
