import Ember from 'ember';

export function markedDown(body) {
  return new Ember.Handlebars.SafeString(window.marked(body));
}

export default Ember.Handlebars.makeBoundHelper(markedDown);
