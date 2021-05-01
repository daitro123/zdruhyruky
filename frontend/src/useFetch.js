import React, { useEffect, useState } from "react";

const useFetch = (url, options) => {
	const [response, setResponse] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url, options);
				const json = await res.json();
				setResponse(json);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return response;
};

export default useFetch;
