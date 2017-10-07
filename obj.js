
//////////////////////////
// OBJECTS / STRUCTURES //
//////////////////////////

function make_restaurant(name, location, categories, price, reviews) {
	this.name = name
	this.location = location
	this.categories = categories
	this.price = price
	this.reviews = reviews
}

function make_review(restaurant, rating) {
	this.restaurant = restaurant
	this.rating = rating

}

function make_user(name, user_reviews) {
	this.name = name
	this.user_reviews = user_reviews
}