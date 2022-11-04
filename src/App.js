import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Accounts from "./Components/Accounts Button/Accounts"
import Theme from "./Components/Theme/Theme";
import ExerciseButton from "./Components/Play Button/ExerciseButton";
import ExerciseCard from "./Components/Exercise Card/ExerciseCard";
import Accessbar from "./Components/Access Bar/Accessbar";
import Calender from "./Components/Calender/Calender";
import Subscription from "./Components/Subscription/Subscription";
import BackButton from "./Components/Back Button/BackButton";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Registration from "./Components/Auth/Registration";
import {createTheme} from 'react-dark-theme'
import { useState } from "react";

function App() {

  const darkTheme = {
      background: '#1b1b3a',
      text: 'white'
  }
  const lightTheme = {
    background: 'white',
    text: 'black'
  }

  const myTheme = createTheme(lightTheme, darkTheme)
  const [login, setLogin] = useState(false)
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: myTheme.background, color: `${myTheme.text} !important`}}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Theme />
                <Accessbar />
                <ExerciseCard />
                <Calender />
                <Subscription />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                {login ? <Navbar setLogin={setLogin} login={login}/> : <Accounts/>}
                <Theme />
                <ExerciseButton time={3} />
                <BackButton />
                <Profile />
                <Subscription />
                <Footer />
              </>
            }
          />
          <Route
            path="/auth/login"
            element={
              <Login setLogin = {setLogin}/>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <Registration/>
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
