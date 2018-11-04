var users = [];

var User = {
	id: "",
	username: "",
	age: 0,
	info: function() {
		console.log("INFO: " + JSON.stringify(this));
	}
}

var create = function(id, username, age) {
	var user = Object.create(User);
	user.id = id;
	user.username = username;
	user.age = age;
	return user;
}

users.push(create('0', 'karoladmin', 25));

var each = function() {
	users.forEach(function(currentUser) {
		console.log(JSON.stringify(currentUser));
	});
}

each();

var admin = create('23', 'karoladmin', 25);
admin.info();

