const loggedIn = "loggedIn"

export const setLogged = (token) => {
    localStorage.setItem(loggedIn, token);
}

export const getLogged = () => localStorage.getItem(loggedIn);

export const removeLogged = () => {
    localStorage.removeItem(loggedIn)
}