var map = {}; //ID - osoba

var human = {
		name: 'Karol',
		surname: 'Meksuła',
		phone: 49224449,
		
		info: function() {
			return "name: " + name + ", surname: " + surname + ", phone: " + phone;
		}
	};

map[0] = human;


for(var hum in map) {
	console.log(JSON.stringify(hum));
}

//lis t all objects in map
