import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "./context";

export const useFetch = (url, options) => {
	const [response, setResponse] = useState(null);
	const { search } = useContext(AppContext);

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
	}, [search]);
	return response;
};

export const useCheckForClickOutside = (ref, containerSelector, search, setState) => {
	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (!e.target.closest(containerSelector) && !ref.current.contains(e.target)) {
				setState({ ...search, isOpen: false });
			}
		};
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [search]);
};

export const useCloseWindowOnEsc = (search, setState) => {
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.keyCode === 27 && search.isOpen) {
				setState({ ...search, isOpen: false });
			}
		};
		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [search]);
};

export function useURLParams() {
	const history = useHistory();
	const params = new URLSearchParams(history.location.search);
	const updateURL = (params) => {
		history.push({
			pathname: "/predmety",
			search: params.toString(),
		});
	};

	return {
		searchParams: {
			params: params,
			append(key, value) {
				params.append(key, value);
				updateURL(params);
			},
			remove(value) {
				const newParams = new URLSearchParams(
					Array.from(params).filter((param) => param[1] !== value)
				);
				updateURL(newParams);
			},
			removeAll(key) {
				params.delete(key);
				updateURL(params);
			},
		},
	};
}
