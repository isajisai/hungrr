
////////////////////
// DATA FILTERING //
////////////////////

function filter_time(obj_array, max_time) {
	time_filtered = filter(obj_array, function(a) {
		return a.time < max_time;
	});
	return max_with_f(time_filtered, function(a) {
		return a.rating;
	});
}

function filter_rating(obj_array, min_rating) {
	return filter(obj_array, function(a) {
		return a.rating > min_rating;
	});
}

function filter_price(obj_array, max_price) {
	price_filtered = return filter(obj_array, function(a) {
		return a.price < max_price;
	});
	return max_with_f(price_filtered, function(a) {
		return a.rating;
	});
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//!!!!!!!!!!!!!!!!!!!!!! ALGO GOES HERE !!!!!!!!!!!!!!!!!!!!!!//
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//

function deduce(obj_array) {

}