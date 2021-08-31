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
import Sign_Up from './components/sign_up';
import Roll from './components/documentation';
import Roll1 from './components/documentation1';
import Roll2 from './components/documentation2';
import Roll3 from './components/documentation3';
import Roll4 from './components/documentation4';
import Roll5 from './components/documentation5';
//  import Introduction from './components/NewPage';
import Tabe from './components/tab';


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
              <Route exact path = "/what-problem-is-egoras-trying-to-solve" component = {Sect} />
              {/* <Route exact path = "/documents" component = {Feeder} /> */}
              <Route exact path = "/documents1" component = {Schedule}/>
              <Route exact path = "/product" component = {Reports}/>
              <Route exact path = "/reports/reports1" component = {Reports1}/>
              <Route exact path = "/reports/reports3" component = {Reports4}/>
              <Route exact path = "/login" component = {Login}/>
                <Route exact path = "/introduction" component ={Roll}/>
              <Route exact path = "/signup" component = {Sign_Up}/>
                <Route exact path = "/introduction" co mponent = {Tabe}/>
                
                  <Route exact path = "/Egoras-decentralized-autonomous-organization" component = {Roll1}/> 
                    <Route exact path = "/Lending-partner-governance" component = {Roll2}/> 
                    <Route exact path = "/Loan-approval-governance" component = {Roll3}/>
                    <Route exact path = "/interest-rate-governance" component = {Roll4}/>
                    <Route exact path = "/interest-sharing-formula" component = {Roll5}/>

           </Switch>
       
  <Footer3/>  
<Footer id="racing"/>
    </div>
    </Router>
  );
}

export default App;
