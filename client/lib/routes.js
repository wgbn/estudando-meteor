Router.map(function(){
    this.route('home', {
        path: '/',
        template: 'home',
        layoutTemplate: 'layout',
        data: function(){
            return {
                posts: Post.list(Friendship.timelineIds(Meteor.userId())),
                followers: Friendship.followers(Meteor.userId()),
                followings: Friendship.followings(Meteor.userId()),
            };
        }
    });

    this.route('user', {
        path: '/user/:_id',
        template: 'user',
        layoutTemplate: 'layout',
        data: function(){
            var _id = this.params._id;
            var isFollowing = Friendship.isFollowing(_id);
            var usuario = Meteor.users.findOne({_id: _id});
            Session.set('currentUserId', _id);
            Session.set('isFollowing', isFollowing);
            return {
                user: usuario,
                posts: Post.list(Friendship.timelineIds(_id)),
                followers: Friendship.followers(_id),
                followings: Friendship.followings(_id),
            };
        }
    });

    this.route('follow', {
        path: '/user/:_id/follow',
        action: function(){
            Meteor.call('followUser', this.params._id);
            this.redirect('/user/'+this.params._id);
        }
    });

    this.route('unfollow', {
        path: '/user/:_id/unfollow',
        action: function(){
            Meteor.call('unfollowUser', this.params._id);
            this.redirect('/user/'+this.params._id);
        }
    })
});
// cap 9