(function(root) {
	
	if( typeof module !== 'undefined' && module.exports ) {
		exports = module.exports = MyLib();
	} else {
	  	window.MyLib = MyLib();
	}	

	function MyLib() {

		

		// Before including this library you must include date.js
		this.MyDateTime = function(day, month, year, hour = 0, min = 0, sec = 0) {
			this.hour = hour;
			this.min = min;
			this.sec = sec;
			this.date = new MyDate(day, month, year);
			this.secondsPerDay = 60 * 60 * 24;
			this.secondsPerYear = 365 * this.secondsPerDay;
			this.secondsPerLeapYear = 366 * this.secondsPerDay;

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
				if(	!this.date.isNum(this.hour) 	|| !this.date.isNum(this.min)		|| !this.date.isNum(this.sec) ){
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
				result *= this.secondsPerDay;
				return result;
			};

			this.secondsInTheSameMonth = function() {
				let days = (this.date.day - 1) * this.secondsPerDay;
				let hours = this.hour * 60 * 60;
				let min = this.min * 60;
				return days + hours + min + this.sec;
			};

			this.secondsUpToTheYear = function() {
			    let secondsYears = 0;
			    for (let year = 1970; year < this.date.year; year++) {
			      secondsYears += this.date.isLeapYear(year) ? this.secondsPerLeapYear : this.secondsPerYear;
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
		        return diff/this.secondsPerDay;
		      default:
		        return 'Invalid input';
		    }
		  };
		};
	};
	root.MyLib = new MyLib();
})(this);
