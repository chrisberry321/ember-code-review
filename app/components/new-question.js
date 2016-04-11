import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        submit: this.get('submit') ? this.get('submit'): "",
        author: this.get('author') ? this.get('author'): "",
        notes: this.get('notes') ? this.get('notes'): "",
        responses: []
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
