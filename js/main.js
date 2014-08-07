var chronometerInterval = null;
var countdownInterval = null;

var chronometer = {
	seconds: 0,
	active: false,
	start: function() {
		if(!this.active) {
			chronometerInterval = setInterval(this.update, 1000);
			this.active = true;
		}
	},
	stop: function() {
		if(chronometerInterval != null && this.active) {
			clearInterval(chronometerInterval);
			this.active = false;
		}
	},
	reset: function() {
		if(this.active) {
			chronometer.stop();
		}
		chronometer.seconds = 0;
		this.active = false;
		var d = new Date(chronometer.seconds * 1000);
		document.getElementById("txtseconds").innerHTML = (d.getHours() - 1) + ":" + d.getMinutes() + ":" + d.getSeconds();
	},
	update: function() {
		chronometer.seconds++;
		var date = new Date(chronometer.seconds * 1000);
		document.getElementById("txtseconds").innerHTML = (date.getHours() - 1) + ":" + date.getMinutes() + ":" + date.getSeconds();
	}
};


var countdowntimer = {
	seconds: 0,
	active: false,
	start: function() {
		if(!this.active) {
			countdownInterval = setInterval(this.update, 1000);
			this.active = true;
		}
	},
	stop: function() {
		if(countdownInterval != null && this.active) {
			clearInterval(countdownInterval);
			this.active = false;
		}
	},
	reset: function() {
		if(this.active) {
			countdowntimer.stop();
		}
		countdowntimer.seconds = 0;
		this.active = false;
		var d2 = new Date(countdowntimer.seconds * 1000);
		document.getElementById("txtcountdown").innerHTML = (d2.getHours() - 1) + ":" + d2.getMinutes() + ":" + d2.getSeconds();
	},
	update: function() {
		if(countdowntimer.seconds != 0) {
			countdowntimer.seconds--;
			var date = new Date(countdowntimer.seconds * 1000);
			document.getElementById("txtcountdown").innerHTML = (date.getHours() - 1) + ":" + date.getMinutes() + ":" + date.getSeconds();
		}
	},
	set: function(hours, minutes, seconds) {

		var hours = parseInt(hours);
		var minutes = parseInt(minutes);
		var seconds = parseInt(seconds);

		if(isNaN(hours)) {
			hours = 0;
		}

		if(isNaN(minutes)) {
			minutes = 0;
		}

		if(isNaN(seconds)) {
			seconds = 0;
		}

		countdowntimer.seconds = (hours * 3600) + (minutes * 60) + seconds;

		if(countdowntimer.seconds > 0) {
			this.start();
		}else{
			alert("El tiempo no puede ser negativo o 0");
		}
	}
};



