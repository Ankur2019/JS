

//  whenever each of the routes on the left are visited, the name of the actions on the right are fired as events, 

EmployeeManager.Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'employees': 'showEmployees',
      'employees/new': 'newEmployee',
      'employees/edit/:id': 'editEmployee',
    }
  });


//   router.on('route:showEmployees', function() {
//     ...
//   });