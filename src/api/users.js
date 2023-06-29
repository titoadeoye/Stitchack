import axios from "axios";
import { getFromStorage, logout } from "../constants";

const api = axios.create({
	baseURL: `${process.env.REACT_APP_BASEURL}/users`,
});

// api.interceptors.response.use(undefined, (error) => {
// 	if (
// 		error.response.status === 401 ||
// 		error.response.data.message === "401 Unauthorized"
// 	) {
// 		logout();
// 	}
// });

export const getUser = (id) =>
	api
		.get(`/${id}`, {
			headers: {
				Authorization: `Bearer ${getFromStorage("token")}`,
			},
		})
		.then((res) => res.data)
		.catch((error) => {
			throw new Error(error.response.data.message);
		});

export const getCustomers = (id) =>
	api
		.get(`/${id}/customers`, {
			headers: {
				Authorization: `Bearer ${getFromStorage("token")}`,
			},
		})
		.then((res) => res.data)
		.catch((error) => {
			throw new Error(error.response.data.message);
		});

export const addCustomer = (id, data) =>
	api
		.post(`/${id}/customers`, data, {
			headers: {
				Authorization: `Bearer ${getFromStorage("token")}`,
			},
		})
		.then((res) => res.data)
		.catch((error) => {
			throw new Error(error.response.data.message);
		});