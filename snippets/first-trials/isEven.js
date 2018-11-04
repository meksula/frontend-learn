function isEven(number) {
     let even;
	if(Number(number) % 2 === 0) {
	   return "A number " + number + " is even.";	
	} else {
	   return "A number " + number + " is not even.";
	}
}

console.log(isEven(356));
