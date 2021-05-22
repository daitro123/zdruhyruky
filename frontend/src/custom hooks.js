import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "./context";

export const useFetch = (url, options) => {
	const [response, setResponse] = useState(null);
	const { searchState } = useContext(AppContext);

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
	}, [searchState]);
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

export const useCloseWindowOnEsc = (state, setState) => {
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.keyCode === 27 && state.isOpen) {
				setState({ ...state, isOpen: false });
			}
		};
		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [state]);
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

export function useUpdateStateWithParams(searchParams) {
	const { dispatch } = useContext(AppContext);

	useEffect(() => {
		dispatch({
			type: "ADD",
			attributeType: "katalog",
			value: searchParams.params.getAll("katalog"),
		});
		dispatch({
			type: "ADD",
			attributeType: "barva",
			value: searchParams.params.getAll("barva"),
		});
		dispatch({
			type: "ADD",
			attributeType: "velikost",
			value: searchParams.params.getAll("velikost"),
		});
		dispatch({
			type: "ADD",
			attributeType: "znacka",
			value: searchParams.params.getAll("znacka"),
		});
		dispatch({ type: "ADD", attributeType: "stav", value: searchParams.params.getAll("stav") });
		dispatch({
			type: "SET_PRICE",
			attributeType: "cenaOd",
			value: searchParams.params.get("cenaOd"),
		});
		dispatch({
			type: "SET_PRICE",
			attributeType: "cenaDo",
			value: searchParams.params.get("cenaDo"),
		});
	}, []);
}
