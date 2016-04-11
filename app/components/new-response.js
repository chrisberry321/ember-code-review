import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },
    save4() {
      var params = {
        answer: this.get('answer') ? this.get('answer'): "",
        author: this.get('author') ? this.get('author'): "",
        question: this.get('question')
      };
      console.log(params);
      this.set('addNewResponse', false);
      this.sendAction('save5', params);
    }
  }
});
