import Ember from 'ember';

export function subcommitteeLink(params) {
  var committee = params[0]
  var subcommittees = params[1].subcommittees;
  console.log(subcommittees);
  for(var i = 0; i < subcommittees.length; i++) {
    if (subcommittees[i].parent_committee_id === committee.committee_id) {
      return true;
    }
  }
  return false;
}

export default Ember.Helper.helper(subcommitteeLink);
