export const getURLfriendlyString = (string) => {
	return string
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.split(" ")
		.join("-");
};

export const removeQueryFromURL = (history, queryName) => {
	const params = new URLSearchParams(history.location.search);
	params.delete(queryName);
	history.push({
		pathname: "/predmety",
		search: params.toString(),
	});
};
