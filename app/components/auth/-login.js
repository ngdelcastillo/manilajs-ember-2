import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    login(){
      Ember.$('.modal').modal('hide');
      this.sendAction('login', {
        identification: this.get('email'),
        password: this.get('password')
      });
    }
  }
});
