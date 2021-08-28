import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
// import Home from './homimg';

import Footer from './components/footer';
import Feeder from './components/pade1';
import Aos, { init } from 'aos';
import 'aos/dist/aos.css';
import { Reports, Reports1, Reports2, Reports3, Reports4, Reports5 } from './pages/reports';


import Sect from './components/NewPage';
import NavBar12 from './components/navbar1';
import Footer3 from './components/footer3';
import Mobile from './components/navbar3';
import Schedule from './components/schedule';
import Login from './components/login';
import Sign_Up from './components/sign_up'

import './components/body1.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  useEffect(()=>{
Aos.init({})
  },[])

  const [color,setColor] = useState();

  const currentPage = window.location.pathname;

  useEffect(()=>{
if( currentPage === '/'){
     setColor(()=>{document.body.style.background ='#fffcf8;'})
    }      
  });



  return (
        < Router>
     <div className=" boy">
    

     
       <NavBar12/>
       <Mobile/>
      
          {/* <IndexRoute component = {Homepage1} /> */}
           <Switch>
               <Route exact path = "/" component = {Feeder} /> 
              <Route exact path = "/about" component = {Sect} />
              {/* <Route exact path = "/documents" component = {Feeder} /> */}
              <Route exact path = "/documents1" component = {Schedule}/>
              <Route exact path = "/product" component = {Reports}/>
              <Route exact path = "/reports/reports1" component = {Reports1}/>
              <Route exact path = "/reports/reports3" component = {Reports4}/>
              <Route exact path = "/login" component = {Login}/>
              <Route exact path = "/signup" component = {Sign_Up}/>

           </Switch>
       
  <Footer3/>  
<Footer id="racing"/>
    </div>
    </Router>
  );
}

export default App;
