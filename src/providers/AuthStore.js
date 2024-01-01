
import { makeObservable, observable, action } from 'mobx';
class AuthStore {
	isAuthenticated = false;
	user = {};
	data = null;
	slideOverOpen = false;
	constructor() {
		makeObservable(this, {
			isAuthenticated: observable,
			user: observable,
			slideOverOpen: observable,
			data: observable,
			login: action,
			logout: action,
			getData: action
		});
	}


	getData() {
		fetch('/api/hello').then((res) => res.json().then((data) => {
			this.data = data.data
		}))
	}
	login(name) {
		this.user = {
			name,
		};
		this.isAuthenticated = true;
	}

	logout() {
		this.user = {};
		this.isAuthenticated = false;
	}
}

const authStore = new AuthStore();

export default authStore;