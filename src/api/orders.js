import axios from "axios";
import { getFromStorage, logout } from "../constants";

const api = axios.create({
	baseURL: `${process.env.REACT_APP_BASEURL}/orders`,
});

api.interceptors.response.use(undefined, (error) => {
	if (
		error.response.status === 401 ||
		error.response.data.message === "401 Unauthorized"
	) {
		logout();
	}
});


export const getOrders = (id) =>
	api
		.get(`/${id}/orders`, {
			headers: {
				Authorization: `Bearer ${getFromStorage("token")}`,
			},
		})
		.then((res) => res.data)
		.catch((error) => {
			throw new Error(error.response.data.message);
		});
