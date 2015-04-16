import Ember from 'ember';
import layout from '../templates/components/ion-side-menus';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ion-side-menus',
  classNames: ['pane', 'view']
});
