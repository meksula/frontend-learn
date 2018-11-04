//demonstracja działania metod tablicowych

var names = ['Karol', 'Ola', 'Ania'];
console.log(names);

function display() {
	for(var name in names) {
		console.log(name + ". " + names[name]);
	}
}

names.push('Aleksander');
console.log("After add new name: \n");
display();

names.pop();
console.log("\nAfter pop()\n");
display();

names.shift();
console.log("\nAfter shift() : zdejmuje pierwszy element z kolekcji\n");
display();

names.unshift("Gienek");
console.log("\nAfter unshift(..) : dodaje na początku kolekcji element\n");
display();

//możemy przeglądać tablice od początku i od końca:

names.push("Konrad");
names.push("Kasia");
names.push("Michał");

var name = names.indexOf("Ola");
var name2 = names.lastIndexOf("Kasia");
console.log("indexOf() : " + name + "\nlastIndexOf() : " + name2);

//slice
var namesSliced = names.slice(1,2);
console.log("slice(1,2) : " + namesSliced + "\n");

var newNames = ['Oliwia', 'Małgosia'];

var mergedArrays = newNames.concat(names);
console.log(mergedArrays);