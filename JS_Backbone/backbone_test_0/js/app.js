window.EmployeeManager = {
    Models: {},
    Collections: {},
    Views: {},
  
    start: function(data) {

      // EmployeeManager.Collections.Employees is in collections/employees.js
      var employees = new EmployeeManager.Collections.Employees(data.employees);

      // EmployeeManager.Router is in router.js
      var router = new EmployeeManager.Router();
  
      router.on('route:home', function() {
        // navigate method is used to update and save the application as URL
        // triggers a redirect to the employees route
        // replace:true the url will be updated, but it will NOT create a browser history entry ?? (it creats history)

        router.navigate('employees', {
          trigger: true,
          replace: true
        });
      });
      
      router.on('route:showEmployees', function() {
        
        // EmployeeManager.Views.Employees is in views/employees.js
        var employeesView = new EmployeeManager.Views.Employees({
          collection: employees
        });
        
        // main-container is a div class in index.html
        $('.main-container').html(employeesView.render().$el);
      });
  
      
      // EmployeeManager.Views.EmployeeForm is in views/empoyeeForm.js

      router.on('route:newEmployee', function() {
        var newEmployeeForm = new EmployeeManager.Views.EmployeeForm({
          
          // EmployeeManager.Models.Employee is in models/employee.js
          model: new EmployeeManager.Models.Employee()
        });
  
        
        newEmployeeForm.on('form:submitted', function(attrs) {
          attrs.id = employees.isEmpty() ? 1 : (_.max(employees.pluck('id')) + 1);
          employees.add(attrs);
          
          router.navigate('employees', true); // why? adding this true, is it not a default value
        });
  
        $('.main-container').html(newEmployeeForm.render().$el);
      });
  
      router.on('route:editEmployee', function(id) {
        var employee = employees.get(id);
      
        var editEmployeeForm;
  
        if (employee) {
          editEmployeeForm = new EmployeeManager.Views.EmployeeForm({
              model: employee
          });
  
          editEmployeeForm.on('form:submitted', function(attrs) {
            employee.set(attrs);
            router.navigate('employees', true);
          });
  
          $('.main-container').html(editEmployeeForm.render().$el);
        } else {
          router.navigate('employees', true);
        }
      });
  
      // Backbone.history.start() is used to allow the use of hashangs for the routes.
      // Backbone history is a global router that will keep track of the history and let us enable the routing in the application. 

      Backbone.history.start();
    }
  };


/*

the EmployeeManager.start() function that was called in the index.html file? The function houses the events that the router listens on.

Whenever the user launches the app, the router listens on the home event, and triggers a redirect to the employees route.

Whenever the user hits the #employees route, it listens on the showEmployees event and renders the list of employees.

Whenever the user hits the #employee/new route, it listens on the newEmployee event, renders the form for adding new employees and handles the form submission.

Whenever the user hits the #employees/edit/:id route, it listens on the editEmployee event, and renders the edit form.



The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window. 
A window for a given document can be obtained using the document.defaultView property.
A global variable, window, representing the window in which the script is running, is exposed to JavaScript code.

*/

/*
using trigger: true depends on your context.
for example creating for deleting a customer record, then setting trigger to true is the right thing to do.
Think about it. If you delete a customer record don't to want to refresh the list of customers to reflect that deletion?


setting trigger:true will update the URL, but it will also run the handler that was specified for that route and create a browser history entry.
When passing replace:true the url will be updated, no handler will be called, but it will NOT create a browser history entry


*/

/*
Backbone history is a global router that will keep track of the history and let us enable the routing in the application. 
To instantiate a route and start tracking the navigation history, 
we need to simply create the router class and 
call Backbone.history.start for letting the backbone start listening to routes and manage history.


*/