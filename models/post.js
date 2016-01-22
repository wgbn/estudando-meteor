Post = new Meteor.Collection('posts');

Post.publish = function(message, name){
    this.insert({
        message: message,
        date: new Date(),
        userId: Meteor.userId(),
        name: name
    });
};

Post.list = function(userIds){
    return this.find(
        {userId: {$in: userIds}},
        {sort: {time: -1, name: 1}}
    );
};