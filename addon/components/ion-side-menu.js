import Ember from 'ember';
import layout from '../templates/components/ion-side-menu';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ion-side-menu',
  classNames: ['menu'],
  classNameBindings: [
    'left:menu-left',
    'right:menu-right'
  ]
});
