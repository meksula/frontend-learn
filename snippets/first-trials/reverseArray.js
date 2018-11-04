var arr = [1,2,3,4,5,6,7,8,9];

function reverseArray(array) {
	var arrRev = [];
	for(var i = array.length; i >= 0; i--) {
		arrRev.push(array[i]);
	}
	return arrRev;
}

console.log("Przed: " + arr);

var reversed = reverseArray(arr);

console.log("Po: " + reversed);

console.log("A teraz odwracanie w miejscu: ")

function reverseInPlace(array) {
	var index = 0;
	for(var i = array.length - 1; i >= (array.length / 2); i--) {
		var tmp = array[index];
		array[index] = array[i];
		array[i] = tmp;
		index++;
	}

	return array;
}

var reversedInPlace = reverseInPlace(reversed);
console.log("Po: " + reversedInPlace);