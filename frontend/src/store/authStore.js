import { create } from "zustand";

export const authStore = create((set) => ({
    
    //states
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated: !!localStorage.getItem("token"),


    //actions
    login: (token, user) => {

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        set({
            token,
            user,
            isAuthenticated: true,
        })
    },

    Logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        set({
            token: null,
            user: null,
            isAuthenticated: false,
        })
    }
}))