
import { makeObservable, observable, action } from 'mobx';
class AuthStore {
	isAuthenticated = false;
	user = {};
	constructor() {
		makeObservable(this, {
			isAuthenticated: observable,
			user: observable,
			login: action,
			logout: action
		});
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