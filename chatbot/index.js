'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 5000))

// Allows us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTES

app.get('/', function(req, res) {
	res.send("Hi I am a chatbot")
})

let token = "EAAEAZAA4KSJYBAMHYhLnqNL2ZBJy0zuhmiZCotkendCro2HF7cD5jpDG2ReM4JCQoZCANRI87NVofVLjysLSi5VHARgJnuEZB1a5QKpv8NoIDloeObRnaAvokVw4AzCzRZCZAM5ovmS0AdmgohrHrxb3SdmkXsNjtGNzwXNtd982AZDZD"


// Facebook 

//Setup array to store values
var values = [];

//loead categories
import {categories} from "test_cat.js";
let cat = categories;

//Normal messaging
app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === "blondiebytes") {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})



app.post('/webhook/', function(req, res) {
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id
		if (event.message && event.message.text) {
			let text = event.message.text
			var contained = false;
			for (int i = 0; i < cat.length; i++){
				if (text.includes(cat[i])) {
					contained = true;
					values.push(text);
				}
			}
			if (text.includes("minutes")){
				values.push(text);
				sendText(sender, "Restaurants that are outside of your time proximity have been filtered out. Do you have any other specifications?")
			}
			else if (text.includes("$")){
				values.push(text);
				sendText(sender, "Restaurants that are outside of your price range have been filtered out. Do you have any other specifications?")
			}
			else if (contained) {
				sendText(sender, "Restaurants that do not match your category have been filtered out. Do you have any other specifications?")
			}

			else {
				sendText(sender, "Cannot update your search. Type help to see a list of keywords that can filter your search.")
			}
			
		}
	}
	res.sendStatus(200)
})



function sendText(sender, text) {
	let messageData = {text: text}
	request({
		url: "https://graph.facebook.com/v2.6/me/messages",
		qs : {access_token: token},
		method: "POST",
		json: {
			recipient: {id: sender},
			message : messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log("sending error")
		} else if (response.body.error) {
			console.log("response body error")
		}
	})
}

app.listen(app.get('port'), function() {
	console.log("running: port")
})