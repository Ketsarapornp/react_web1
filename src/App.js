import React from 'react';
import {Route, Router} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Products from './components/products/Products';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact={true} path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/footer' component={Footer}/>
      <Route path='/products' component={Products}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/users' component={Users}/>
      <Footer/>
    </div>
    
  );
}

export default App;
