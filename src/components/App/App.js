import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CurrentMovieInfo } from '../contexts/CurrentMovieInfo.js';
import ProtectedRoute from "../../utils/ProtectedRoute.jsx";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Error from "../Error/Error.js";
import './App.css';

import api from "../../utils/MainApi.js";
// import apiMov from "../../utils/MoviesApi.js";
import { getToken, setToken, removeToken } from "../../utils/token.js";
import { getSavedMovies, setSavedMovies } from '../../utils/savedMovies.js'


function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState('');
  //const [email, setEmail] = useState('');
  const [movie, setMovie] = useState([]);
  const [save, setSaved] = useState(JSON.parse(getSavedMovies()) || [])

  const [loggedIn, setLoggedIn] = useState(false);
  const [isToken, setIsToken] = useState(getToken());
  const [loading, setloading] = useState(false);
  const [sucsess, setSucsess] = useState(false);

  useEffect(() => {
    if (isToken) {
      setloading(true);
      api.checkToken(isToken)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
          }
        })
        .catch((err) => console.log(err))
        .finally(() =>{
          setloading(false);
        })
    }
  }, [navigate, isToken]);

  function logOut() {
    removeToken();
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    setIsToken(null);
    navigate('/');
  }

  const setMovieSaved = (movie) => {
    setSaved(prev => {
      const newValue = [...prev, movie];
      setSavedMovies(JSON.stringify(newValue))
      return newValue;
    })
  }
  const removeMovieSaved = (movieId) => {
    setSaved(prev => {
      const newValue = prev.filter(movie => movie.movieId !== movieId);
      setSavedMovies(JSON.stringify(newValue))
      return newValue;
    })
  }

  function editProfile({ name, email }) {
    api.changeUserInfo({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setSucsess(true);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function onRegister(name, email, password) {
    api.signUp(name, email, password)
      .then((data) => {
        setLoggedIn(true);
        setCurrentUser(data);
        console.log(currentUser);
        console.log(loggedIn);
        navigate('/movies', { replace: true });
      }
      )
      .catch((err) => {
        console.log(err)
      })
  }

  function onLogin(email, password) {
    api.signIn(email, password)
      .then((data) => {
        console.log(data);
        console.log(currentUser);
        if (data.token) {
          setToken(data.token);
          setLoggedIn(true);
          setCurrentUser(data)
          navigate('/movies', { replace: true });
        }
      })
      .catch(err => console.log(`Ошибка входа ${err}`));  }


  function handleSucsess(){
    
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentMovieInfo.Provider value={movie}>
        <div className="root">
          <Routes>

            <Route path="/" element={<Main
              loggedIn={loggedIn} />} />;

            <Route path="/movies" element={<ProtectedRoute 
            component={Movies} 
            loggedIn={loggedIn}
            setMovie={setMovie}
            loading={loading}
            setloading={setloading}
            setSaved={setSaved}
            save={save}
            setMovieSaved={setMovieSaved}
            removeMovieSaved={removeMovieSaved}/>} />;

            <Route path="/saved-movies" element={<ProtectedRoute
              component={SavedMovies}
              loggedIn={loggedIn} />} />;

            <Route path="/profile" element={<ProtectedRoute
              component={Profile}
              user={currentUser}
              editProfile={editProfile}
              logOut={logOut}
              loggedIn={loggedIn} />
            } />;

            <Route path="/signup" element={<Register onRegister={onRegister} />} />
            <Route path="/signin" element={<Login onLogin={onLogin} />} />
            <Route path="*" element={(<Error />)} />
          </Routes>
        </div>
      </CurrentMovieInfo.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
