import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ChangePassword from './components/Profile/ChangePassword';
import LoginSignUp from './components/User/LoginSignUp';
import ResetPassword from './components/User/ResetPassword';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route  path="/" element = {<Home/>}/>
      <Route  path="/login" element = {<LoginSignUp/>}/>
      <Route  path="/changepassword" element = {<ChangePassword/>}/>
      <Route  path="password/reset/:token" element = {<ResetPassword/>}/>

      </Routes>
      <Footer/>
      </Router>
      
    </div>
  )
}

export default App
