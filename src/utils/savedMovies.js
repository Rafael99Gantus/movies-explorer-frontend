const savedMovies = "save"

export const setSavedMovies = (savedMovies) => {
    localStorage.setItem(savedMovies, savedMovies);
}

export const getSavedMovies = () => localStorage.getItem(savedMovies);

export const removeSavedMovies = () => {
    localStorage.removeItem(savedMovies)
}