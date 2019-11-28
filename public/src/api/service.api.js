/**
 * @author Thuan Envity
 * @date 2019/11/19
 */
import axios from "axios";


const URL_SERVER = process.env.VUE_APP_URL_SERVER;
export default {
    registerUser: async function (data) {
        return await axios({
            method: "POST",
            url: `${URL_SERVER}/auth/register`,
            data: data
        });
    },
    loginUser: async function (data) {
        return await axios({
            method: "POST",
            url: `${URL_SERVER}/auth/login`,
            data: data
        });
    }
}