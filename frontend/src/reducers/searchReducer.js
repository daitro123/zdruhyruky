export const initState = {
	katalog: [],
	velikost: [],
	barva: [],
	znacka: [],
	cenaOd: "",
	cenaDo: "",
	stav: [],
};

export const searchReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			// SelectionPage adds array of queries from url with query.getAll()
			if (Array.isArray(action.value)) {
				return {
					...state,
					[action.attributeType]: [...action.value],
				};
			}
			return {
				...state,
				[action.attributeType]: [...state[action.attributeType], action.value],
			};

		case "REMOVE":
			let newArr = state[action.attributeType].filter((item) => item !== action.value);
			return {
				...state,
				[action.attributeType]: newArr,
			};

		case "SET_PRICE":
			return {
				...state,
				[action.attributeType]: action.value,
			};
		case "REMOVE_PRICE":
			return {
				...state,
				[action.attributeType]: "",
			};

		case "RESET":
			return {
				...initState,
			};
		default:
			break;
	}
};
