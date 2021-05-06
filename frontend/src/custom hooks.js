import React, { useEffect, useState } from "react";

export const useFetch = (url, options) => {
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

export const useCheckForClickOutside = (ref, containerSelector, state, setState) => {
	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (!e.target.closest(containerSelector) && !ref.current.contains(e.target)) {
				setState({ ...state, isOpen: false });
			}
		};
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [state]);
};
