// create the add employee form view. 
// view for adding employees.

EmployeeManager.Views.EmployeeForm = Backbone.View.extend({
    template: _.template($('#tpl-new-contact').html()),
  
    events: {
      'submit .employee-form': 'onFormSubmit'
    },
  
    // The render function assigns the model to the template.
    // Where this is extended ??

    render: function() {
      var html = this.template(_.extend(this.model.toJSON(), {
        isNew: this.model.isNew()
      }));
      this.$el.append(html);
      return this;
    },
  
    // the onFormSubmit function is called when we submit the form. And this function is called whenever the submit event is fired. 
    onFormSubmit: function(e) {
      e.preventDefault(); // function works not understood
  
      this.trigger('form:submitted', {
        name: this.$('.employee-name-input').val(),
        tel: this.$('.employee-tel-input').val(),
        email: this.$('.employee-email-input').val(),
        avatar: '13.svg' // is this 13.svg in http://svgavatars.com/style/svg/ from <img class="media-object" in index.html 
      });
    }
  });