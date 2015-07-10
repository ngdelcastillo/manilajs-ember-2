import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(params) {
      this.get('session').authenticate('simple-auth-authenticator:devise', params).then(() => {
        console.log("I'm in!");
      });
    },
    logout(){
      this.get('session').invalidate();
    }
  }
});
