import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    destroyResponse(response) {
      response.destroyRecord();
      this.transitionTo('question');
    },
    save6(params) {
      debugger;
      var newResponse = this.store.createRecord('response', params);
      var question = params.question;
      question.get('responses').addObject(newResponse);
      newResponse.save().then(function() {
        return question.save();
      });
      this.transitionTo('question');
    }
  }
});
