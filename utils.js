
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

// Misc.

function zip(arrays) {
	/* zips sequences together. */

	return arrays[0].map(function(_,i){
	return arrays.map(function(array){return array[i]})
    });
}

function enumerate(s, start=0) {
	/* takes in sequence of k elements and returns a sequence of k pairs.
	the ith pair is of the form [i+start, sequence[i]]. */

	var to_zip = [];
	for (var i = start; i < s.length; i++) {
		to_zip.push(i);
	}
	return zip(to_zip, s)
}
