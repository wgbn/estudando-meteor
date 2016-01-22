Accounts.onCreateUser(function(options, user){
    if (user.services.facebook){
        var face = user.services.facebook;
        user['profile'] = {
            name: face.name
        };
    } else {
        user['profile'] = options.profile;
    }
    return user;
});