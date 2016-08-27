/**
 *
 *	ALERT JS
 *	Defines all the methods required for creation and modification of alerts.
 */

// Global Variables for testing purposes
var topic = ['Hey I am  a Topic', 'I am another Topic', 'Look at another topic', 'I am Bored', 'Someone Send you a text'],
	message = "Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as. ",
	colors= ['deep-purple', 'blue', 'red', 'indigo', 'light-blue', 'teal', 'orange'];

// Returns a random integer between [min, max]
var getInt = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Set the opacity of the given div to 0
var fadeOut = function(div) {
	div.style.opacity = 0;
}

// Set the opacity of the given div to 1
var fadeIn = function(div) {
	div.style.opacity = 1;
}

// Returns the date in specific format
var getDate = function() {
	var date = new Date();
	return date.getHours() + ":" + date.getMinutes();
}

// Returns a new alert
var createAlert = function(topic, msg, color) {
	var block = document.createElement("div"),
		h2 = document.createElement("h2"),
		p = document.createElement('p'),
		span = document.createElement("span");

	block.className = "alert " + color;

	h2.innerHTML = topic;
	p.innerHTML = msg;
	span.innerHTML = getDate();

	block.appendChild(h2);
	block.appendChild(p);
	block.appendChild(span);

	return block;
}

// Add a alert to the holder
var add = function(holder) {
	var alert = createAlert(topic[getInt(0, topic.length-1)], message, colors[getInt(0, colors.length-1)]);

	holder.appendChild(alert);

	setTimeout(function() {
		fadeIn(alert);
	}, 100);

	setTimeout(function() {
		fadeOut(alert);
	}, 5000);

	setTimeout(function() {
		holder.removeChild(alert);
	}, 6000);

	setTimeout(function() {
		add(holder);
	}, 2000);
}

// Onload activity
window.onload = function() {
	var holder = document.getElementById("notifications");

	setTimeout(function() {
		add(holder);
	}, 100);
}
