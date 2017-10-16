
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

function deduce(obj) {
	if (obj.time > max_time) {
		return 0;
	} else {
		var dist_r = calculate_time(obj.time);
		var rating_r = calculate_rating(obj.rating);
		var price_r = calculate_price(obj.price);
		console.log(dist_r);
		//return 0.2*dist_r + 0.6*rating_r + 0.2*price_r; 
	}
}

function calculate_time(time) {
	var x;
	if (time <= 5) {
		return 1;
	} else if (time < 10) {
		x = (time - 5)/2;
		return Math.sqrt(x + 5)* 0.3 / (Math.sqrt(5) - 1.5);
	} else if (time < 20) {
		x = time * Math.PI/20;
		return Math.sin(x + Math.PI/2) * 0.4 + 0.3;
	} else if (time < 30) {
		x = x = (time - 20) / 5;
		return (-Math.pow(x,3) + 8)*3/80;
	} else {
		return 0;
	}
}

function calculate_rating(rating) {
	var sub = 5 - rating;
	if (rating > 4.5) {
		return 1;
	} else if (rating > 4) {
		x = sub*Math.PI;
		return Math.sin(x)*3/20 + 0.85;
	} else if (rating > 3) {
		x = (sub - 1)*2;
		return (-Math.pow(x,3) + 8)*11/160;
	} else if (rating > 2) {
		x = (sub - 2)*2;
		return (-Math.pow(x - 2,3) + 8)*3/80;
	} else if (rating >= 1) {
		x = sub - 3;
		return (1 - x)*3/20;
	} else {
		return 0;
	}
}

function calculate_price(price) {
	if (price >= 3) {
		return 0.2;
	} else if (price >= 2) {
		return 0.7;
	} else {
		return 1;
	} 
}