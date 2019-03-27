
// This view is responsible for the list of employees on the page.

EmployeeManager.Views.Employees = Backbone.View.extend({
    template: _.template($('#tpl-contacts').html()),


    renderOne: function(employee) {
      var itemView = new EmployeeManager.Views.Employee({model: employee});
      this.$('.contacts-container').append(itemView.render().$el); // what means by $('.contacts-container')? is it identifier ?
    },
  
    render: function() {
      var html = this.template();
      this.$el.html(html);
  
      this.collection.each(this.renderOne, this); // why adding this last 'this'
  
      return this;
    }
  });