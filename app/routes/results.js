import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=f97432556c8946338d0017462353f4e0&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var legislators = [];
     responseJSON.results.forEach(function(legislator) {
       legislators.push(legislator);
     });
     return legislators;
   });
  }
});
