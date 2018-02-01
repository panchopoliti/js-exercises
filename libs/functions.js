(function(root) {
	
	let concurrentTimeouts = {};

	/** it's not concurrent */
	function debounce(fn, millis) {
		if (concurrentTimeouts[fn]) {
			clearTimeout(concurrentTimeouts[fn]);
			concurrentTimeouts[fn] = null;
		}

		concurrentTimeouts[fn] = setTimeout(fn, millis);
	}

	root.MyFunctions = {
		debounce
	};
})(this);