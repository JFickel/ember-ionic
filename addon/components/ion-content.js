import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ion-content',
  classNames: ['scroll-content', 'overflow-scroll'], //  overflow-scroll
  classNameBindings: [
    'ionic-scroll:ionic-scroll',
    'header:has-header',
    'footer:has-footer'
  ]
});
