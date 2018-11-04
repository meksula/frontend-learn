function range(first, last) {
	if (last < first) {
		return undefined;
	}

	var range = [];
	for(var i = first; i <= last; i++) {
		range.push(i);
	}

	return range;
}

    var sum = 0;
    function sumRange(range) {
        if(range.length === 0) {
            return sum;
        } else {
            sum += range.pop();
            return sumRange(range);
        }
    }

var tab = range(1, 12);

console.log(sumRange(tab));
