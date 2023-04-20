import { createContext, useContext, useEffect, useState } from "react";
import { getFromStorage, setToStorage } from "../constants";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(getFromStorage("user"));
    const [isLoggedIn, setIsLoggedIn] = useState(getFromStorage("token"));

	useEffect(() => {
		setToStorage("user", user);
	}, [user]);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
                isLoggedIn,
                setIsLoggedIn
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	return useContext(UserContext);
};

export default UserProvider;
