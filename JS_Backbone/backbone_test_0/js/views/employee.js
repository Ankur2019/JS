

// This is the view that handles the details of each employee. 

EmployeeManager.Views.Employee = Backbone.View.extend({ 
    
    
    // the html tag, <li> that is assigned a class. This is the element that houses the employee detail. 
    // The render function ensures that the right data is appended to the template and displays on the page.
    
    tagName: 'li', 
    
    className: 'media col-md-6 col-lg-4', 

    template: _.template($('#tpl-contact').html()),

    // The events object simply maps the onClickDelete function to the click event of the delete-employee button.
    events: { 'click .delete-employee': 'onClickDelete' },


    // listenTo method tells an object to listen to a particular event on another object. 
    // It provides callback function when an event occurs and also keeps track of events.
    // object.listenTo(other, event, callback)


    initialize: function() { this.listenTo(this.model, 'remove', this.remove); },
    

    render: function() { 

        // _.template() Parses a template to create a reusable template function. 
        
        var html = this.template(this.model.toJSON()); 
        
        this.$el.append(html); 
        
        return this; 
    },

    // The onClickDelete function is for removing the data from the model and collection.
    // preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. ? it does here

    // e is the short var reference for event object which will be passed to event handlers.
    // The parameter (e) is automatically passed from javascript to function when you add an event listener. It represents the element that was affected,
    
    onClickDelete: function(e) { e.preventDefault(); this.model.collection.remove(this.model); }
    
});


// this.on() - > this.on('change',this.someChange,this); ??
// someChange: function(model,options) { alert(‘something has changed’); }

