import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('response', params.response_id);
  },
  actions: {
    destroyResponse(response) {
      response.destroyRecord();
      this.transitionTo('index');
    }
  }
});
