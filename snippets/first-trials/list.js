var list = function() {
	var object = {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: undefined
			}
		}
	}
	return object;
};

//console.log(list());

var ids = [1, 2, 3, 4];
var names = ["Karol", "Dominika", "Olaf", "Małgorzata"];

// var arrayToList = function(arrayId, arrayName) {
// 	var list = [];
// 	var nextRef;
// 	function next() {
// 		var element = {
// 			id: arrayId[i],
// 			name: arrayName[i]
// 		}

// 		if (nextRef === undefined) {
// 			nextRef = element;
// 		}

// 		list.push(element);
// 		return element;
// 	}
// 	for(var i = 0; i < arrayId.length; i++) {
// 		var ret = next();
// 		if (nextRef === undefined) {
// 			nextRef = ret
// 		}
// 	}

// 	return list;
// }

var arrayToList = function(arrayId, arrayName) {
	var list = [];
	var current;
	var nextOb;
	for(var i = arrayName.length - 1; i >= 0; i--) {
		console.log(i);
		var object = {
			id: arrayId[i],
			name: arrayName[i],
			next: nextOb 
		}
		nextOb = object;
		list.push(object);
	}
	return list;
}

console.log(arrayToList(ids, names));