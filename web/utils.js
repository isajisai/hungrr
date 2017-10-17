
/////////////////////////////////////////
// UTILITY FUNCTIONS / DATA STRUCTURES //
/////////////////////////////////////////

// Cluster Analysis

function mean(s) {
	/* aritmetic mean of the elements of s. */

	var sum = s.reduce(function(a, b) { return a + b; }, 0);
	return sum / s.length;
}

function sample(s, k) {
	/* returns k-element random sampling of items from s.
	uses Fisher-Yates shuffling algo. */

	var to_return = [], n = s.length, j;
	while(n) {
		j = Math.floor(Math.random() * n--);
		to_return.push(s.splice(j, 1)[0]);
	}
	return to_return.slice(0, k);
}

function distance(p1, p2) {
	/* Returns the Euclidean distance of two given two-element pairs. */

	x_comp, y_comp = Math.pow(p1[0]-p2[0], 2), Math.pow(p1[1]-p2[1], 2)
	return Math.sqrt(x_comp, y_comp);
}

// Misc.

function zip(arrays) {
	/* zips sequences together. */

	return arrays[0].map(function(_,i){
	return arrays.map(function(array){return array[i]})
    });
}

function min_with_f(array, key_f) {
	/* return element that key_f returns the minimum value for. */

	var minimum = key_f(array[0]);
	var value_of_minimum = array[0];
	for (var i = 1; i < array.length; i++) {
		var curr = key_f(array[i]);
		if (curr < minimum) {
			minimum = curr;
			value_of_minimum = array[i];
		}
	}
	return value_of_minimum;
}

function max_with_f(array, key_f) {
	/* return element that key_f evaluates the maximum value for. */

	var maximum = key_f(array[0]);
	var value_of_maximum = array[0];
	for (var i = 1; i < array.length) {
		var curr = key_f(array[i]);
		if (curr > maximum) {
			maximum = curr;
			value_of_maximum = array[i];
		}
	}
	return value_of_maximum;
}

function filter(array, filter) {
	var to_return = [];
	for (int i = 0; i < array.length; i++) {
		if (filter(array[i])) to_return.push(array[i]);
	}
	return to_return;
}

function map_and_filter(array, map_f, filter_f) {
	/* applies map_f to each array element and keeps it if it passes filter_f. */

	var to_return = [];
	for (int i = 0; i < array.length; i++) {
		var x = map_f(array[i]);
		if (filter_f(x)) {
			to_return.push(map_f(x));
		}
	}
	return to_return;
}

function enumerate(s, start=0) {
	/* takes in sequence of k elements and returns a sequence of k pairs.
	the ith pair is of the form [i+start, sequence[i]]. */

	var to_zip = [];
	for (var i = start; i < s.length; i++) {
		to_zip.push(i);
	}
	return zip(to_zip, s);
}
