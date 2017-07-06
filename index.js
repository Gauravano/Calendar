
var currentNum ;
var currentMonth;
var currentYear ;

function currentConfig(){
	 clear();
	 currentNum = 6;
 	 currentMonth = 6;
	 currentYear = 2017;	
	 dateSetter(currentMonth,currentYear);
}

function nextMonthConfig(){
	clear();
	if(currentMonth == 11){
		currentMonth = 0;
		currentYear+=1;
	}else{
		currentMonth += 1;
	}
	dateSetter(currentMonth,currentYear);
}

function prevMonthConfig(){
	clear();
	if(currentMonth == 0){
		currentMonth == 11;
		currentYear -=1;
	}else{}
		currentMonth -=1;
	}
	dateSetter(currentMonth,currentYear);
}

function nextYearConfig(){
	clear();
	currentYear += 1;
	dateSetter(currentMonth,currentYear);
}

function prevYearConfig(){
	clear();
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
		case 1:monthStr = 28;
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

function leapYearCheck(month){
	if(month%400 == 0){
		return 29;
	}else if(month%4==0 && month%100!=0){
		return 29;
	}else{
		return 28;
	}
}


function clear(){
	for(var i=0;i<=34;i++){
		document.getElementById(i).innerHTML = '';
	}
}

function dateSetter(monthNum,year){

	var month = monthConvert(monthNum);
	var numDays = numOfdays(monthNum);

	if(month == 1){
		numDays = leapYearCheck(month);
	}

	var fullDate = month + ' ' +'01, '+year+' 00:00:00';
	console.log(fullDate);

	var setdate = new Date(fullDate);
	var setDay = setdate.getDay();

	// var setdate = new Date('July 01, 2017 00:00:00');
	// var setNum = setdate.getDate();
	// var setDay = setdate.getDay();

	for(var i=setDay,j=1;i<=34 && j<=numDays;i++,j++){
		document.getElementById(i).innerHTML = j;
	}

	//var g = numDays - j;

	for(i=0;j<=numDays;i++,j++){
		document.getElementById(i).innerHTML = j;
	}

}

var current = document.getElementById("current");
var nextMonth =  document.getElementById("nextMonth");
var PrevMonth =  document.getElementById("PrevMonth");
var nextYear =  document.getElementById("nextYear");
var PrevYear =  document.getElementById("PrevYear");

currentConfig();
current.addEventListener('click',currentConfig);
nextMonth.addEventListener('click',nextMonthConfig);
PrevMonth.addEventListener('click',prevMonthConfig);
nextYear.addEventListener('click',nextYearConfig);
PrevYear.addEventListener('click',prevYearConfig);

