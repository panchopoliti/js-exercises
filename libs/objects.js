
const isNum = v => typeof v === 'number';
const isLeapYear = (year) => (((year % 100) !=0 ) &&((year % 4) == 0))||((year % 400) == 0);

const secondsPerDay = 60 * 60 * 24;
const secondsPerYear = 365 * secondsPerDay;
const secondsPerLeapYear = 366 * secondsPerDay;

function MyDate(day, month, year) {
	if(day === null || month === undefined || year === undefined){
    console.log('Fecha Invalida');
  }

	this.day = day;
	this.month = month;
	this.year = year;
	this.toString = function() {
    if (!this.isValid()) {
			return 'Fecha inválida';
		}
		return this.timezone === 'en-US'
			? `${this.month}/${this.day}/${this.year}`
			: `${this.day}/${this.month}/${this.year}`
	};

	this.isBefore = function(obj) {
		if(this.year > obj.year) {
			return false;
		} 
		else if(this.year === obj.year){
			if(this.month > obj.month){
				return false;
			} 
			else if(this.month === obj.month){
				if(this.day >= obj.day){
					return false;
				}
			}
		}
		return true;
	};

	this.isAfter = function(obj) {
		return obj.isBefore(this);
	};

	this.isLeapYear = function() {
		return isLeapYear(this.year);
	};

	this.setLocale = function(timezone) {
		//Possible Timezones
		// 'es-AR' ----- dd/mm/yyyy
		// 'en-US' ----- mm/dd/yyyy
		if(timezone === 'es-AR' || timezone === 'en-US'){
			this.timezone = timezone;
			return timezone;
		} else {
			return 'Invalid Time Zone';
		}
	};

	this.getLocale = function() {
		return this.timezone || 'es-AR';
	};

	this.getMonthDays = function(month) {
		let result;
		switch(month) {
			case 1:
			case 3:
			case 5:
			case 7: 
			case 8:
			case 10:
			case 12:
				result = 31;
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				result = 30;
				break;
			case 2:
				result = this.isLeapYear() ? 29 : 28;
				break;  
		}
		return result;
	};

	this.isValid = function() {
		//Type of data validation
		if(this.isNotANumber(this)){
			return false
		}

		//Leap-year
		if(!this.isLeapYear() && this.month === 2 && this.day === 29 ){
			return false;
		}

		if (this.year < 1970 || this.year > 3000) {
			return false;
		}

		if (this.month < 1 && this.month > 12) {
			return false;
		}

		if (this.day < 1 || this.day > this.getMonthDays(this.month)) {
			return false;
		}

		return true;
	};
	this.isNotANumber = function(obj) {
		if(	!isNum(this.day) 	|| !isNum(this.month) 	|| !isNum(this.year) ){
			return true;
		}
		return false;
	};
}

function MyDateTime(day, month, year, hour = 0, min = 0, sec = 0) {
	this.hour = hour;
	this.min = min;
	this.sec = sec;
	this.date = new MyDate(day, month, year);

	this.toString = function() {
		if (!this.isValid()) {
			return 'Fecha inválida';
		}
		return `${this.date.toString()} ${this.mkMilitar()}`;
	};

	this.setLocale = function(locale) {
		this.date.setLocale(locale);
	};

	this.getLocale = function() {
		return this.date.getLocale();
	};

	this.mkMilitar = function(){
		return `${this.asMilitar(this.hour)}:${this.asMilitar(this.min)}:${this.asMilitar(this.sec)}`;
	};

	this.asMilitar = function(num){
		return num < 10 ? `0${num}` : num;
	};

	this.isNotANumber = function(obj) {
		if(	!isNum(this.hour) 	|| !isNum(this.min)		|| !isNum(this.sec) ){
			return true;
		}
		return false;
	};

	this.isValid = function() {

		if (!this.date.isValid()) {
			return false;
		}

		//Type of data validation
		if(this.isNotANumber(this)){
			return false
		}

		if (this.hour < 0 && this.hour > 23) {
			return false;
		}

		if (this.min < 0 && this.min > 59) {
			return false;
		}

		if (this.sec < 0 && this.sec > 59) {
			return false;
		}
		
		return true;

	};
	
	this.getEpoch = function() {
		let secondsYears = this.secondsUpToTheYear();
		let secondsMonth = this.secondsOfMonthsInTheSameYear();
		let restOfSeconds = this.secondsInTheSameMonth();
		return secondsYears + secondsMonth + restOfSeconds;
	};

	this.secondsOfMonthsInTheSameYear = function() {
		let result = 0;
		for (let i = 1; i < this.date.month; i++){
			result += this.date.getMonthDays(i);
		}
		result *= secondsPerDay;
		return result;
	};

	this.secondsInTheSameMonth = function() {
		let days = (this.date.day - 1) * secondsPerDay;
		let hours = this.hour * 60 * 60;
		let min = this.min * 60;
		return days + hours + min + this.sec;
	};

	this.secondsUpToTheYear = function() {
    let secondsYears = 0;
    for (let year = 1970; year < this.date.year; year++) {
      secondsYears += isLeapYear(year) ? secondsPerLeapYear : secondsPerYear;
    }
    return secondsYears;
	};

/*
Unit Posibilities: second/s, minute/s, hour/s and day/s.
*/

  this.diff = function(unit, obj){
    diff = this.getEpoch() - obj.getEpoch();
    switch (unit){
      case 'second':
      case 'seconds':
        return diff;
        break;
      case 'minute':
      case 'minutes':
        return diff/60;
        break;
      case 'hour':
      case 'hours':
        return diff/3600;
        break;
      case 'day':
      case 'days':
        return diff/secondsPerDay;
      default:
        return 'Invalid input';
    }
  };
}



// const juani = new MyDateTime(27,08,1991, 23, 11, 25);
// const felu = new MyDateTime(23,04,1999, 8, 43, 28);
// const prueba = new MyDateTime(02, 02, 2000, 88, 7, 25);
// const pancho = new MyDateTime(06,12,1995, 9, 8, 21);
// const pedro = new MyDateTime(15,02,1993, 7, 42, 32);
// const andru = new MyDateTime(07,10,2005, 18, 58, 23);
// const leap = new MyDateTime(07,10,2004, 18, 58, 23);
