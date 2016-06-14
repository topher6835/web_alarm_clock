$(document).ready(function() {
	var dispMin;
	var dispHour;
	var dispSec;

	function displayTime() {
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridiem = "AM";
		var monthNames = ["January", "February", "March", "April", "May",
		"June", "July", "August", "September", "October", "November", "December"];
		var month = monthNames[currentTime.getMonth()];
		var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
		"Friday", "Saturday"];
		var day = dayNames[currentTime.getDay()];
		var date = currentTime.getDate();
		
		if(seconds<10) {
			dispSec = "0" + seconds;
		} else {dispSec = seconds;}
		if(minutes<10) {
			dispMin = "0" + minutes;
		} else {dispMin = minutes;}
		if(hours>=12) {
			dispHour = hours - 12;
			meridiem = "PM";
		} else { dispHour = hours; meridiem = "AM";}
		if(hours==0 || dispHour==0) {
			dispHour = 12;
		}

		var clockDiv = document.getElementById('clock');

		clockDiv.innerHTML = dispHour + ":" + dispMin + ":" + dispSec + " " + meridiem;

		var weekDayDiv = document.getElementById('weekDay');

		weekDayDiv.innerHTML = day;

		var dateDiv = document.getElementById('date');
		dateDiv.innerHTML = month + " " + date;
	}

	setInterval(displayTime, 1000);
	displayTime();
	
	//** Alarm Function **//
	var alarmHour;
	var alarmMinutes;
	var activated = document.getElementById("alarmSub").innerHTML;
	var elementA = document.getElementById('alarmSub');

	var clickable = function() {
		var getTime = alarmSet();
		alarmHour = getTime.h;
		alarmMinutes = getTime.m;
	}

	elementA.addEventListener('click', clickable);

	function alarmSet() {
		activated = document.getElementById("alarmSub").innerHTML;
		if(activated == "Alarm") {
			
			document.getElementById("alarmSub").innerHTML = "Reset";
			var h = document.getElementById("hour").value;
			var m = document.getElementById("minutes").value;
		}
		else {
			document.getElementById("alarmSub").innerHTML = "Alarm";
			document.getElementById("hour").value = "";
			document.getElementById("minutes").value = "";
			$('#back').removeClass('alarm').addClass('normal');
		}
		return {h:h, m:m};
	}
	
	function alarm() {
		if(alarmHour==dispHour && alarmMinutes==dispMin) {
			$('#back').removeClass('normal').addClass('alarm');
		}
	}

	alarm();
	setInterval(alarm, 1000);

});