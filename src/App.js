import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import Home from './homepage';

import Footer from './components/footer';
import Feeder from './components/pade1';
import Aos, { init } from 'aos';
import 'aos/dist/aos.css';

import Sect from './NewPage';
import NavBar12 from './components/navbar1';
import Footer3 from './footer3';

import './body1.css';

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
    
          // document.getElementsByClassName('boy').style.background = "blue";
           
  }
    
  );


  return (
        < Router>
     <div className=" boy" style ={color}>
    

     
       <NavBar12/>
      
          {/* <IndexRoute component = {Homepage1} /> */}
           <Switch>
                <Route exact path = "/" component = {Home} />
              <Route exact path = "/about" component = {Sect} />
              <Route exact path = "/documents" component = {Feeder} />
           </Switch>
       
  <Footer3/>  
<Footer/>
    </div>
    </Router>
  );
}

export default App;
