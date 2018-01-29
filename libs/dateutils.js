(function(root) {
	
	

	function DateUtils() {
		this.isLeapYear = function(year) {
			return (((year % 100) !=0 ) &&((year % 4) == 0))||((year % 400) == 0);
		};	

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
	}

	if( typeof module !== 'undefined' && module.exports ) {
		exports = module.exports = new DateUtils();
	} else {
	  	root.DateUtils = new DateUtils();
	}	

})(this);