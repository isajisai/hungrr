import math
DIST = 30
time = 1
rating = 2
pricing = 3

def generate_rating(restaurant):
	if restaurant[time] > DIST:
		return 0
	else :
		dist_r = calculate_time(restaurant[time])
		rating_r = calculate_rating(restaurant[rating])
		price_r = calculate_price(restaurant[pricing])
		return 0.2*dist_r + 0.6*rating_r + 0.2*price_r

def calculate_time(time):
	if time <= 5:
		return 1
	elif time < 10:
		x = (time - 5)/2
		return math.sqrt(-x + 5)* 0.3 / (math.sqrt(5) - 1.5)
	elif time < 20:
		x = time * math.pi/20
		return math.sin(x + math.pi/2) * 0.4 + 0.3
	elif time < 30:
		x = (time - 20) / 5
		return (-x**3 + 8)*3/80
	else:
		return 0;

def calculate_rating(rating):
	sub = 5 - rating;
	if rating > 4.5:
		return 1
	elif rating >= 4:
		x = sub*math.pi
		return math.sin(x)*3/20 + 0.85
	elif rating > 3:
		x = (sub - 1)*2
		return (-x**3 + 8)*11/160
	elif rating > 2:
		x = (sub - 2)*2
		return (-(x - 2)**3 + 8)*3/80
	elif rating >= 1:
		x = (sub - 3)
		return (1 - x)*3/20
	else:
		return 0;

def calculate_price(price):
	if price == 3:
		return 0.2
	elif price == 2:
		return 0.7
	elif price == 1:
		return 1
	else:
		return 0;

list_restaurants = [
["Taco Bell", 3, 2.0, 1],
["La Burrita", 4, 4.0, 2],
["Chipotle", 7, 3.5, 1],
["Tacos Gordos", 9, 5.0, 2],
["Tacos Sin a Loa", 2, 4.8, 1],
["Panchos Tacos", 15, 5, 1],
["Alberto's Mexican Food", 30, 1, 2],
["Tacos los Toritos", 30, 1, 3]
]

def print_ratings():
	for restaurant in list_restaurants:
		print(restaurant[0], generate_rating(restaurant))

print_ratings();