import Ember from 'ember';
import layout from '../templates/components/ion-loading';

export default Ember.Component.extend({
  layout: layout,
  loading: null,
  backdropClasses: Ember.computed('loading', function() {
    let output
    if (this.loading) {
      output = "visible backdrop-loading active";
    } else {
      output = "";
    }
    return output;
  }),

  containerClasses: Ember.computed('loading', function() {
    let output
    if (this.loading) {
      output = "visible active";
    } else {
      output = "";
    }
    return output;
  })
});
