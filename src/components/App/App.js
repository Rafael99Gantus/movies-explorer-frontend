import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, navigate } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CurrentCardInfo } from '../contexts/CurrentCardInfo.js';
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Error from "../Error/Error.js";
import './App.css';



function App() {
  const [currentUser, setCurrentUser] = useState({name: "Рафаэль"});
  const [currentEmeil, setCurrentEmail] = useState({email: 'raf@mail.ru'});

  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [userEmail, setUserEmail] = useState("");

  // useEffect(() => {
  //   const JWT = localStorage.getItem("jwt");
  //   if (JWT) {
  //     Auth.checkToken(JWT)
  //       .then((res) => {
  //         if (res) {
  //           setLoggedIn(true);
  //           setUserEmail(res.email);
  //           navigate("/", {replace: true})
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //       api.getInfo()
  //       .then((res) => {
  //         setCurrentUser(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  
  //     api.getAllCards()
  //       .then((res) => {
  //         setCards(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [navigate]);

  function logOut() {
    setLoggedIn(false)
    navigate('/')
}

  function editProfile(){
    setCurrentUser(currentUser);
    setCurrentEmail(currentEmeil);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentCardInfo.Provider value={cards}>
        <div className="root">
          <Routes>

            <Route path="/" element={<Main />} />;
            <Route path="/movies" element={<Movies />} />;
            <Route path="/saved-movies" element={<SavedMovies />} />;
            <Route path="/profile" element={
            <Profile 
            user={currentUser} 
            email={currentEmeil}
            editProfile={editProfile} 
            logOut={logOut}/>
            }/>;

            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={(<Error />)} />
          </Routes>
        </div>
      </CurrentCardInfo.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
