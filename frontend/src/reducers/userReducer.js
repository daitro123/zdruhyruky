export const userReducer = (state, action) => {
	switch (action.type) {
		case "REGISTER_USER":
			saveTokenToLocalStorage({ ...action.payload });
			return { ...action.payload, isLogged: true };
		case "LOGIN_USER":
			saveTokenToLocalStorage({ ...action.payload });
			return { ...action.payload, isLogged: true };
		case "VERIFICATION_FAILED":
			return { ...state, isLogged: false };
		case "VERIFIED":
			return { ...state, isLogged: true };

		default:
			break;
	}
};

export const saveTokenToLocalStorage = (data) =>
	localStorage.setItem("userInfo", JSON.stringify(data));

export const getTokenFromLocalStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: "";

export const userInit = {
	username: getTokenFromLocalStorage.username,
	accessToken: getTokenFromLocalStorage.accessToken,
	isLogged: null,
};
