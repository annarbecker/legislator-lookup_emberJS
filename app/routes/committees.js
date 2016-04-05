import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=' + params.chamber + '&per_page=50&subcommittee=false&apikey=8e20f5e7f9274b6d83931f7d055646c9';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var committees = [];
     responseJSON.results.forEach(function(committee) {
       committees.push(committee);
     });
     return committees;
   });
  }
});
