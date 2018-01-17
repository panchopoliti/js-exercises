const isLeapYear = (year) => (((year % 100) !=0 ) &&((year % 4) == 0))||((year % 400) == 0);
const isNum = v => typeof v === 'number';

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
