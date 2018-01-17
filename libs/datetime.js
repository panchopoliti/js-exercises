const secondsPerDay = 60 * 60 * 24;
const secondsPerYear = 365 * secondsPerDay;
const secondsPerLeapYear = 366 * secondsPerDay;
const isNum = v => typeof v === 'number';

// Before including this library you must include date.js
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
    const diff = this.getEpoch() - obj.getEpoch();
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
