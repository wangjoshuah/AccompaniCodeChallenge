$(document).ready(function() {
	
	// page is now ready, initialize the calendar ...

	$('#calendar').fullCalendar({
		// put your options and callbacks here
		googleCalendarApiKey: 'AIzaSyDyeKHQLsI4QSoYb27MrFn5MIE9vF7daXk',
		events: {
			googleCalendarId: '1ps37k1k1ru9arih6bdkjra2l4@group.calendar.google.com',
			className: 'gcal-event' // an option!
		}
		// weekends: false
	});
});