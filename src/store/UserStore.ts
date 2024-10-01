import { makeAutoObservable } from "mobx";

class UserStore {
    user: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(login: string) {
        this.user = login;
    }

    logout() {
        this.user = null;
    }
}

export const userStore = new UserStore();