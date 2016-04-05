import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectChamber() {
      var params = {
        chamber: this.get('chamber')
      };
      console.log(params.chamber)

      this.sendAction('selectChamber', params);
    }
  }
});
