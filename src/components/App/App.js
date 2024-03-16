import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState('');
  //const [email, setEmail] = useState('');
  const [movie, setMovie] = useState([]);
  const [save, setSaved] = useState(JSON.parse(getSavedMovies()) || [])

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setloading] = useState(false);
  const [sucsess, setSucsess] = useState(false);

  const isLocationMain = location.pathname === '/';
  const isLocationMovies = location.pathname === '/movies';
  const isLocationSavedMovies = location.pathname === '/saved-movies';
  const isLocationProfile = location.pathname === '/profile';
  const isLocationSignUp = location.pathname === '/signup';
  const isLocationSignIn = location.pathname === '/signin';

  useEffect(() => {
    const JWT = getToken();
    if (JWT) {
      setloading(true);
      api.checkToken(JWT)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
            if(isLocationMain){
              navigate('/', { replace: true });
            }
            if(isLocationMovies){
              navigate('/movies', { replace: true });
            }
            if(isLocationSavedMovies){
              navigate('/saved-movies', { replace: true });
            }
            if(isLocationProfile){
              navigate('/profile', { replace: true });
            }
            if(isLocationSignUp || isLocationSignIn){
              navigate('/', { replace: true });
            }
          }
        })
        .catch((err) => console.log(err))
        .finally(() =>{
          setloading(false);
        })
    }
  }, [navigate]);

  function logOut() {
    removeToken();
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
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
        onLogin(data.email, password)
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
