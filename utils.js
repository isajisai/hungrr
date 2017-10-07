
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
		j = Math.floor(Math.random() * n--_;
		to_return.push(s.splice(j, 1)[0]);
	}
	return to_return.slice(0, k);
}

function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
}

function e_dist(p1 ,p2) {
	return (p1.x - p2.x)**2 + (p1.y - p2.y)**2;
}


