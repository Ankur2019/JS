
EmployeeManager.Collections.Employees = Backbone.Collection.extend({
    model: EmployeeManager.Models.Employee
});


  
//   Earlier I mentioned that collections work with models.
  
//   ## Create The Views
  
//   We'll have three views. One view for handling the list of employees, one view for the details of each employee and one view for adding employees.
  
//   Let's get started. Go ahead and open up the `js/views` directory. Create a file, `employee.js`.
  
//   _js/views/employee.js_