(function(root) {

	const daysOfMonthsInTheYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	const secondsPerDay = 60 * 60 * 24;
	const secondsPerYear = 365 * secondsPerDay;
	const secondsPerLeapYear = 366 * secondsPerDay;

	function DateUtils() {
		this.isLeapYear = function(year) {
			return (((year % 100) !=0 ) &&((year % 4) == 0))||((year % 400) == 0);
		};

		this.asMilitar = num => num < 10 ? `0${num}` : num;

		this.getMonthDays = function(month, year) {
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
					result = (this.isLeapYear(year)) ? 29 : 28;
					break;
			}
			return result;
		};

		this.secondsUpToTheYear = function(year) {
		    let secondsYears = 0;
		    for (let y = 1970; y < year; y++) {
		     	secondsYears += (this.isLeapYear(y)) ? secondsPerLeapYear : secondsPerYear;
		    }
		    return secondsYears;
		};

		this.reverseGetEpoch = function(seconds) {
			const year = Math.floor(seconds / secondsPerYear) + 1970;
			const secondsInYear = seconds - this.secondsUpToTheYear(year);
			const extra24Hours = 1;
			const dayInYear =  Math.floor(secondsInYear / secondsPerDay) + extra24Hours;
			const month = this.monthOfYearDay(dayInYear, year);
			let day = this.dayInMonth(dayInYear, month, year);

			return new MyDateTime(day, month, year);

		};

		this.monthOfYearDay = function(numDay, year) {
			let day = numDay;

			if (this.isLeapYear(year) && day > 59) {
				--day;
			}

			for(let i = 1; i < 13; i++) {

				if (day < daysOfMonthsInTheYear[i] + 1) {
					return i;
					break;
				}
			}
		};

		this.dayInMonth = function(numDay, month, year) {
			let result = 0;
			const extraDayPerLeapYear = 1;

			if(this.isLeapYear(year) && month > 1) {
				result = daysOfMonthsInTheYear[month] + extraDayPerLeapYear - this.getMonthDays(month, year);
			} else {
				result = daysOfMonthsInTheYear[month] - this.getMonthDays(month, year);
			}

			return numDay - result;
		};
	}

	if( typeof module !== 'undefined' && module.exports ) {
		exports = module.exports = new DateUtils();
	} else {
	  	root.DateUtils = new DateUtils();
	}

})(this);
