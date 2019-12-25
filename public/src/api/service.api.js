/**
 * @author Thuan Envity
 * @date 2019/11/19
 */
import axios from "axios";


const URL_SERVER = process.env.VUE_APP_URL_SERVER;
export default {
    registerUser: async function (data) {
        return axios({
            method: "POST",
            url: `${URL_SERVER}/auth/register`,
            data: data
        });
    },
    loginUser: async function (data) {
        return axios({
            method: "POST",
            url: `${URL_SERVER}/auth/login`,
            data: data
        });
    },
    getAllUsers: async function (params) {
        return axios({
            method: "GET",
            url: `${URL_SERVER}/user/getAllUsers`,
            params: params
        });
	},
	getCurrentUser: async function (params) {
		return axios({
			method: "GET",
			url: `${URL_SERVER}/user/getCurrentUser`,
			params: params
		});
	},
    getAllRooms: async function (params) {
        return axios({
            method: "GET",
            url: `${URL_SERVER}/room/getAllRooms`,
            params: params
        });
    },
    createRoom: async function (data) {
        return axios({
            method: "POST",
            url: `${URL_SERVER}/room/createRoom`,
            data: data
        });
	},
	getMessage: async function (params) {
		return axios({
			method: "GET",
			url: `${URL_SERVER}/message/${params.id}`,
			params: params
		});
	}
	
}