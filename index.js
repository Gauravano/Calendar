var currentNum = 6;
var currentMonth = 6;
var currentYear = 2017;


function currentConfig(){
	 currentNum = 6;
 	 currentMonth = 6;
	 currentYear = 2017;	
	 dateSetter()
}

function currentConfig(){
	 currentNum = 6;
 	 currentMonth = 6;
	 currentYear = 2017;	
	 dateSetter(currentMonth,currentYear);
}

function nextMonthConfig(){
	currentMonth += 1;
	dateSetter(currentMonth,currentYear);
}

function prevMonthConfig(){
	currentMonth -=1;
	dateSetter(currentMonth,currentYear);
}

function nextYearConfig(){
	currentYear += 1;
	dateSetter(currentMonth,currentYear);
}

function prevYearConfig(){
	currentYear -=1;
	dateSetter(currentMonth,currentYear);
}




function monthConvert(currentMonth){
	var monthStr;
	switch(currentMonth){
		case 0:monthStr = "January";
							break;
		case 1:monthStr = "February";
							break;
		case 2:monthStr = "March";
							break;
		case 3:monthStr = "April";
							break;
		case 4:monthStr = "May";
							break;
		case 5:monthStr = "June";
					break;
		case 6:monthStr = "July";
		break;
		case 7:monthStr = "August";
		break;
		case 8:monthStr = "September";
		break;
		case 9:monthStr = "October";
		break;
		case 10:monthStr = "November";
		break;
		case 11:monthStr = "December";
		break;

	}
	return monthStr;
}

// function day(day){

// 	var starter;

// 	switch(day){
// 		case 0:starter = "Sunday";
// 							break;
// 		case 1:starter = "Momday";
// 							break;
// 		case 2:starter = "Tuesday";
// 							break;
// 		case 3:starter = "Wednesda";
// 							break;
// 		case 4:starter = "May";
// 							break;
// 		case 5:starter = "June";
// 					break;
// 		case 6:starter = "July";
// 		break;
// }

function numOfdays(){
	var monthStr;
	switch(currentMonth){
		case 0:monthStr = 31;
							break;
		case 1:monthStr = 29;
							break;
		case 2:monthStr = 31;
							break;
		case 3:monthStr = 30;
							break;
		case 4:monthStr = 31;
							break;
		case 5:monthStr = 30;
					break;
		case 6:monthStr = 31;
		break;
		case 7:monthStr = 31;
		break;
		case 8:monthStr = 30;
		break;
		case 9:monthStr = 31;
		break;
		case 10:monthStr = 30;
		break;
		case 11:monthStr = 31;
		break;

	}
	return monthStr;	
}


function dateSetter(monthNum,year){

	var month = monthConvert(monthNum);
	var numDays = numOfdays(monthNum);

	var fullDate = month + ' ' +'01, '+year+' 00:00:00';
	console.log(fullDate);

	var setdate = new Date(fullDate);
	var setDay = setdate.getDay();

	// var setdate = new Date('July 01, 2017 00:00:00');
	// var setNum = setdate.getDate();
	// var setDay = setdate.getDay();

	for(var i=setDay,j=1;i<=34 && i<numDays;i++,j++){
		document.getElementById(i).innerHTML = j;
	}

	for(;i<numDays;i++,j++){
		document.getElementById(i).innerHTML = j;
	}

}

var current = document.getElementById("current");
var nextMonth =  document.getElementById("nextMonth");
var PrevMonth =  document.getElementById("PrevMonth");
var nextYear =  document.getElementById("nextYear");
var PrevYear =  document.getElementById("PrevYear");

current.addEventListener('click',currentConfig);
nextMonth.addEventListener('click',nextMonthConfig);
PrevMonth.addEventListener('click',prevMonthConfig);
nextYear.addEventListener('click',nextYearConfig);
PrevYear.addEventListener('click',prevYearConfig);

