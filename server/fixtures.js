// Fixture data
if (Posts.find().count() === 0) { 
	var now = new Date().getTime();
	
    // create two users
	var tomId = Meteor.users.insert({ 
	profile: { name: 'Tom Coleman' }
	});
	 
	
	var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
	});
  
    var tom = Meteor.users.findOne(tomId);
  	var sacha = Meteor.users.findOne(sachaId);

    Posts.insert({
	    title: 'The Meteor Book',
	    userId: tom._id,
	    author: tom.profile.name,
	    url: 'http://themeteorbook.com',
	    submitted: now - 12 * 3600 * 1000,
	    commentsCount: 0
    });
    
    for (var i=0; i < 10; i++) {
	    Posts.insert({
		    title: 'Test post #' + i,
		    author: sacha.profile.name,
		    userId: sacha._id,
		    url: 'http://google.com/?q=test-' + i,
		    submitted: now - i * 3600 * 1000,
		    commentsCount: 0
	    });
    }
}