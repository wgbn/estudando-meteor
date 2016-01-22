Template.profileForm.events({
    "submit form": function(e, t){
        e.preventDefault();
        var inputs = t.findAll('input');
        Meteor.call('profileUpdate', inputs[0].value, inputs[1].value);
        Session.set('editProfile', false);
    }
});