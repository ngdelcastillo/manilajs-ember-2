import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('channels/messages/-list', 'Integration | Component | channels/messages/ list', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{channels/messages/-list}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#channels/messages/-list}}
      template block text
    {{/channels/messages/-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
