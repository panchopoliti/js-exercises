(function(root) {

	function isNum(v) {
		return typeof v === 'number';
	}

	function isNotANumber(obj) {
		if(	!isNum(obj.day) || !isNum(obj.month) || !isNum(obj.year) ){
			return true;
		}
		return false;
	}

  function mkMilitar(day, month, year) {
    return `${DateUtils.asMilitar(year)}-${DateUtils.asMilitar(month)}-${DateUtils.asMilitar(day)}`;
  }

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

		this.dateTypeString = () => `${mkMilitar(this.year, this.month, this.day)}`;

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

		this.inLeapYear = function() {
			return DateUtils.isLeapYear(this.year);
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

		this.getMonthDays = function() {
			return DateUtils.getMonthDays(this.month, this.year);
		};

		this.isValid = function() {
			//Type of data validation
			if(isNotANumber(this)){
				return false
			}

			//Leap-year
			if(!DateUtils.isLeapYear(this.year) && this.month === 2 && this.day === 29 ){
				return false;
			}

			if (this.year < 1970 || this.year > 3000 || isNaN(this.year)) {
				return false;
			}

			if (this.month < 1 && this.month > 12 || isNaN(this.month)) {
				return false;
			}

			if (this.day < 1 || this.day > DateUtils.getMonthDays(this.month, this.year) || isNaN(this.day)) {
				return false;
			}

			return true;
		};

	};

	if ( typeof module !== 'undefined' && module.exports ) {
	 	exports = module.exports = MyDate;
	} else {
	  	root.MyDate = MyDate;
	}

})(this);
