
var jsn = require("/data/restaurants.json");
// Array of objects
var objs = JSON.parse(jsn)
var get_categories(obj_array) {
	to_return = [];
	for (var i = 0; i < obj_array.length; i++) {
		var curr_list = obj_array[i];
		if !(to_return.contains(curr_list.categories))
			to_return.push(curr_list.categories);
		}
	return to_return;
}

export var categories = gets_categories(objs);


