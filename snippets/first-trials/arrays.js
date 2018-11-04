var names = ['Karol', 'Adam', 'Ola', 'Kasia'];
console.log(names);

var human = {
   id: 3882392488,
   name: 'Karol',
   surname: 'Meksuła',
   role: 'ADMIN',
   address: {
      city: 'Lublin',
   },
   info: function() {
    return "Dodatkowe informacje o użytkowniku.";
   }
};



console.log("Rola użytkownika " + human.id + " to: " + human.role);
console.log("Miasto: " + human.address.city);
console.log(human.info());
