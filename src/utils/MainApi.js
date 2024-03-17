class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _sendRequest(url, options) {
        return fetch(url, options)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error('Что-то пошло не так...')
            })
    }

    getUserInfo() { //+
        const token = localStorage.getItem("jwt");
        return this._sendRequest(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
    }

    changeUserInfo(info) {
        const token = localStorage.getItem("jwt");
        return this._sendRequest(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                name: info.name,
                email: info.email
            })
        })
    }

    signUp = (name, email, password) => {
        return this._sendRequest(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, email: email, password: password })
        })
    };


    signIn = (email, password) => {
        return this._sendRequest(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        })
    };

    checkToken = (token) => {
        return this._sendRequest(`${this._url}/users/me`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
    };

    getSaveMovies = (token) => {
        return this._sendRequest(`${this._url}/movies`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
    }


    postSaveMovies = (
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
        owner,
        ) => {
        const token = localStorage.getItem("jwt");
        return this._sendRequest(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                nameRU,
                nameEN,
                thumbnail,
                movieId,
                owner,
            })
        })
    }

    //         country: movie.country,
    //         director: movie.director,
    //         duration: movie.duration,
    //         year: movie.year,
    //         description: movie.description,
    //         image: `https://api.nomoreparties.co${movie.image.url}`,
    //         trailerLink: movie.trailerLink,
    //         thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
    //         movieId: movie.id,
    //         nameRU: movie.nameRU,
    //         nameEN: movie.nameEN,
    //         owner: userId
    //       };
    //       return this._sendRequest(`${this._url}/movies`, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           'Authorization': token
    //         },
    //         body: JSON.stringify(movieData)
    //       })
    // }

    removeSaveMovies = (moviesId) => {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._url}/movies/${moviesId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
        })
    }
}

const api = new Api({
    url: "https://api.movie.rafael.nomoredomainsmonster.ru",
    // url: "https://localhost:3000",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api;