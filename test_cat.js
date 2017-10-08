
var obj_to_categories(obj_array) {
	to_return = [];
	for (var i = 0; i < obj_array.length; i++) {
		var curr_list = obj_array[i];
		for (var j = 0; j < curr_list.length; j++) {
			if !(to_return.contains(obj_array[i].category)) {
				to_return.push(obj_array[i]);
			}
		}
	}
	return to_return;
}

var request = new XMLHttpRequest();
request.open("GET", "../../data/file.json", false);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    var my_JSON_object = JSON.parse(request.responseText);
    console.log(my_JSON_object);
  }
}