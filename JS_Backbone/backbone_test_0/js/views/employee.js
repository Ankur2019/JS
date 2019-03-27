

// This is the view that handles the details of each employee. 

EmployeeManager.Views.Employee = Backbone.View.extend({ 
    
    
    // the html tag, <li> that is assigned a class. This is the element that houses the employee detail. 
    // The render function ensures that the right data is appended to the template and displays on the page.
    
    tagName: 'li', className: 'media col-md-6 col-lg-4', 
    template: _.template($('#tpl-contact').html()),

    // The events object simply maps the onClickDelete function to the click event of the delete-employee button.
    events: { 'click .delete-employee': 'onClickDelete' },

    initialize: function() { this.listenTo(this.model, 'remove', this.remove); },
    
    // how the template function works??

    render: function() { var html = this.template(this.model.toJSON()); this.$el.append(html); return this; },

    // The onClickDelete function is for removing the data from the model and collection.
    
    onClickDelete: function(e) { e.preventDefault(); this.model.collection.remove(this.model); }
    
});


// this.on() - > this.on('change',this.someChange,this); ??
// someChange: function(model,options) { alert(‘something has changed’); }

