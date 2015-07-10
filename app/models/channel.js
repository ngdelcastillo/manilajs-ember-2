import DS from 'ember-data';

export default DS.Model.extend({
  messages: DS.hasMany('message', {embedded: true}),
  name: DS.attr('string')

});
