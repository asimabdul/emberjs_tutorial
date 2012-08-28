/**************************
* Application
**************************/
App = Ember.Application.create({
	ready: function() {
		console.log("First Ember app!");
	}
});

/**************************
* Models
**************************/

/**************************
* Views
**************************/

App.SearchTextField = Ember.TextField.extend({
	insertNewline: function() {
		alert("keypress!");
	}
})

/**************************
* Controllers
**************************/