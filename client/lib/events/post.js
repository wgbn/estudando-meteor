Template.post.events({
    "submit form": function(e, template){
        e.preventDefault();
        var textarea = template.find('textarea');
        var posts = Session.get('posts') || [];
        if (textarea.value){
            Meteor.call('publishPost', textarea.value, Meteor.user().profile.name);
            textarea.value = "";
        }
    }
});