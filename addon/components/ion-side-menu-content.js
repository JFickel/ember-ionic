import Ember from 'ember';
import layout from '../templates/components/ion-side-menu-content';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ion-side-menu-content',
  classNames: ['menu-content', 'pane', 'menu-animated'],
  attributeBindings: ['style'],
  menuActivation: null,
  open: null,
  translateX: 0,

  style: Ember.computed('translateX', function() {
    return Ember.String.htmlSafe(`transform: translateX(${this.get('translateX')}px);
                                  transition: 0.3s transform`);
  }),


  didInsertElement() {
    let hamburgerButton = this.element.querySelector('.ion-navicon');
    let { width } = this.element.getBoundingClientRect();
    let slideWidth = Math.floor(width * 0.73333);
    hamburgerButton.addEventListener('click', () => {
      this.set('menuActivation', 'activated');
      this.toggleProperty('open');
      this.slideThisPane(slideWidth);
    });
  },

  slideThisPane(slideWidth) {
    if (this.open) {
      this.set('translateX', slideWidth);
    } else {
      this.set('menuActivation', null);
      this.set('translateX', 0);
    }
  }
});
