import Ember from 'ember';
import layout from '../templates/components/ion-side-menu-content';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ion-side-menu-content',
  classNames: ['menu-content', 'pane', 'menu-animated'],
  menuActivation: null,
  whatever: 'whatever',

  didInsertElement() {
    let hamburgerButton = this.element.querySelector('.ion-navicon');
    hamburgerButton.addEventListener('click', () => {
      this.set('menuActivation', 'activated');
    });
  }
});
