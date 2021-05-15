export const getURLfriendlyString = (string) => {
	return string
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.split(" ")
		.join("-");
};

export const removeQueryFromURL = (history, value) => {
	const params = new URLSearchParams(history.location.search);
	const paramsArr = Array.from(params);
	const filteredArr = paramsArr.filter((param) => param[1] !== value); // filter out removed query
	const newURL = new URLSearchParams(); //create new URL, append remaining queries and push to history
	filteredArr.forEach((pair) => newURL.append(pair[0], pair[1]));
	history.push({
		pathname: "/predmety",
		search: newURL.toString(),
	});
};

export const removeAllQueriesFromURL = (history, key) => {
	const params = new URLSearchParams(history.location.search);
	params.delete(key);
	history.push({
		pathname: "/predmety",
		search: params.toString(),
	});
};

export const appendQueryToURL = (history, key, value) => {
	const params = new URLSearchParams(history.location.search);
	params.append(key, value);
	history.push({
		pathname: "/predmety",
		search: params.toString(),
	});
};
