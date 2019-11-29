import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
// import io from 'socket.io-client';
import setAuthToken from './utils/authToken';
import moment from 'moment';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false
Vue.prototype.moment = moment;

// let socket = null;


///
// socket = io("http://172.16.110.138:3000/");

///

/** Check for auth token on refresh and set authorization header for incoming requests  */
if (localStorage.authToken) {
	setAuthToken(localStorage.authToken);
}
else {
	setAuthToken(null);
}
/** Axios requests Intercepter */
axios.interceptors.request.use(
	function (config) {
		return config;
	},
	function (err) {
		return err;
	}

);

/** Axios response Intercepter */
axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (err){
		if(err.response.status === 401){
			localStorage.removeItem('authToken');
			router.push({
				name: 'Login',
				params: {message: 'Session has expried, please login again'}
			});
		}
	}
);



new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
