
////////////////////
// DATA FILTERING //
////////////////////

function filter_time(obj_array, max_time) {
	return filter(obj_array, function(a) {
		return a.time < max_time;
	});
}

function filter_rating(obj_array, min_rating) {
	return filter(obj_array, function(a) {
		return a.rating > min_rating;
	});
}

function filter_price(obj_array, max_price) {
	return filter(obj_array, function(a) {
		return a.price < max_price;
	});
}