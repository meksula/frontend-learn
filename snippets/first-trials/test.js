var User = {
   userId: "",
   username: "",
   bornYear: "",
   email: "",
   info: function() {
   	 console.log(this.userId);
   }
};

var user = new Object();
user['userId'] = 435;
user.username = "karoladmin"

console.log(JSON.stringify(user));

function User(userId, username, bornYear, email) {
	this.userId = userId;
	this.bornYear = bornYear;
	this.email = email;
}

var user2 = Object.create(User);
user2.userId = 22;
user2.username = 'karoladmin';
console.log("\n" + JSON.stringify(user2));
user2.info();