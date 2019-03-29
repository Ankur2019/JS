// create the add employee form view. 
// view for adding employees.

EmployeeManager.Views.EmployeeForm = Backbone.View.extend({
    
    template: _.template($('#tpl-new-contact').html()),

    // employee-form class is mentioned in index.html

    events: {
      'submit .employee-form': 'onFormSubmit'
    },
  
    // The render function assigns the model to the template.

    render: function() {
      
      // _.extend Copies every property of the source objects into the first object.
      // The Backbone.js isNew model determines the state of new. If a model doesn't have an id and is not saved to the server, it is considered to be new

      var html = this.template(_.extend( this.model.toJSON(), {isNew: this.model.isNew()} )
      );
      
      this.$el.append(html);
      
      return this;
    },
  
    // the onFormSubmit function is called when we submit the form. And this function is called whenever the submit event is fired. 
    onFormSubmit: function(e) {

      // preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
      e.preventDefault(); // function works not understood
  
      // the trigger() method triggers the specified event and the default behavior of an event for the selected elements.
      // .trigger( event [, extraParameters ] )
      // form:submitted is mentioned in app.js .on('form:submitted' function(attrs) {
        
      
      this.trigger('form:submitted', {
        name: this.$('.employee-name-input').val(),
        tel: this.$('.employee-tel-input').val(),
        email: this.$('.employee-email-input').val(),
        avatar: '13.svg' // is this 13.svg in http://svgavatars.com/style/svg/ from <img class="media-object" in index.html 
      });
    }
  });