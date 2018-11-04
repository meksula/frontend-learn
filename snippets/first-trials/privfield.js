
function Human(name, age, country, password) {
   this.name = name;
   this.age = age;
   this.country = country;

   //priv value
   var password = password;
}

var me = new Human('Karol', 25, 'Polska', 'password');

console.log('NAME: ' + me.name);

var password = me.password;
if (password === undefined) {
   var password = '*********';
}

console.log('PASSWORD: ' + password);
