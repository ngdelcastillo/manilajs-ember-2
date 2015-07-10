import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement(){
    Ember.$("#chatText").on('keydown', (event) => {
      if (event.keyCode === 13){
        if (!event.shiftKey){
          Ember.$('#chatForm').submit();
        }
      }
    });
  },
  actions: {
    createMessage(){
      this.sendAction('createMessage', {body: this.get('body')});
      this.set('body', '');
    }
  }
});
