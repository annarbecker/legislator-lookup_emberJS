import Ember from 'ember';


export default Ember.Route.extend({
  model: function(params) {
    return new Ember.RSVP.hash({
      house1: Ember.$.getJSON({ url: 'http://congress.api.sunlightfoundation.com/committees?chamber=house&per_page=50&page=1&apikey=8e20f5e7f9274b6d83931f7d055646c9'}),
      house2: Ember.$.getJSON({ url: 'http://congress.api.sunlightfoundation.com/committees?chamber=house&per_page=50&page=2&apikey=8e20f5e7f9274b6d83931f7d055646c9'}),
      house3: Ember.$.getJSON({ url: 'http://congress.api.sunlightfoundation.com/committees?chamber=house&per_page=50&page=3&apikey=8e20f5e7f9274b6d83931f7d055646c9'}),
      senate1: Ember.$.getJSON({ url: 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&per_page=50&page=1&apikey=8e20f5e7f9274b6d83931f7d055646c9'}),
      senate2: Ember.$.getJSON({ url: 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&per_page=50&page=2&apikey=8e20f5e7f9274b6d83931f7d055646c9'})
    }).then(function(responseJSON) {
      var committees = [];
      var subcommittees = [];
      var all = {committees, subcommittees};
      responseJSON.house1.results.forEach(function(committee) {
        if (committee.subcommittee === false) {
          committees.push(committee);
        } else {
          subcommittees.push(committee);
        }
      });
      responseJSON.house2.results.forEach(function(committee) {
        if (committee.subcommittee === false) {
          committees.push(committee);
        } else {
          subcommittees.push(committee);
        }
      });
      responseJSON.house3.results.forEach(function(committee) {
        if (committee.subcommittee === false) {
          committees.push(committee);
        } else {
          subcommittees.push(committee);
        }
      });
      responseJSON.senate1.results.forEach(function(committee) {
        if (committee.subcommittee === false) {
          committees.push(committee);
        } else {
          subcommittees.push(committee);
        }
      });
      responseJSON.senate2.results.forEach(function(committee) {
        if (committee.subcommittee === false) {
          committees.push(committee);
        } else {
          subcommittees.push(committee);
        }
      });
      return all;
    });
  }
});


//
// model: function(params) {
//   var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=' + params.chamber + '&per_page=50&subcommittee=false&apikey=8e20f5e7f9274b6d83931f7d055646c9';
//   return Ember.$.getJSON(url).then(function(responseJSON) {
//     var committees = [];
//     responseJSON.results.forEach(function(committee) {
//       committees.push(committee);
//     });
//     return committees;
//   });
//  }
