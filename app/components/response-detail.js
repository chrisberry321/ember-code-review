import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(reponse) {
      if (confirm('Are you sure you want to delete this response?')) {
        this.sendAction('destroyResponse', response);
      }
    }
  }
});
