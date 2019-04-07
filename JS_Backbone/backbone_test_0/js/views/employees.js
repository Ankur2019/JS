
// This view is responsible for the list of employees on the page.

EmployeeManager.Views.Employees = Backbone.View.extend({

    // _.template() Parses a template to create a reusable template function.
    // The html() method sets or returns the content (innerHTML) of the selected elements.

    template: _.template($('#tpl-contacts').html()),


    renderOne: function(employee) {
      
      // EmployeeManager.Views.Employee is in views/employee.js

      var itemView = new EmployeeManager.Views.Employee({model: employee}); // employee model is found as parameter of renderOne

      // contacts-container is in index.html in ul class for id="tpl-contacts"
      this.$('.contacts-container').append(itemView.render().$el); 
    },
  
    render: function() {
      
      var html = this.template();
      
      // el is just an identifier and it refers to an element, a DOM element,
      // this.$el is a cached reference to the jQuery (or Zepto) object

      this.$el.html(html);
      
      // to iterate through a collection each() method provided by Underscore.js.
      // have three arguments: (element, index, list)

      this.collection.each(this.renderOne, this); // adding this last 'this' ?
  
      return this;
    }
  });