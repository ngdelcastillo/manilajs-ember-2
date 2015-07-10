import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    if (!this.get('session.isAuthenticated')){
      this.transitionTo('index');
    }
  },
  model(){
    return this.store.find('channel').then((channels) => {
      return Ember.RSVP.hash({
        channels: channels
      });
    });
  },
  setupController(controller, model){
    controller.set('channels', model.channels);
  },
  actions: {
    createChannel(params){
      this.store.createRecord('channel', params).save();
    }
  }
});
