class ApiMov{
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

    getMovies() {
        return this._sendRequest(`${this._url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
    }
}

const apiMov = new ApiMov({
    url: "https://api.nomoreparties.co/beatfilm-movies",
    // url: "https://localhost:3000",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default apiMov;