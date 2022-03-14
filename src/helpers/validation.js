const isNumber = str => {
	if (typeof str != "string") {
		return false;
	}

	return !isNaN(str) && !isNaN(parseInt(str));
};

export { isNumber };
