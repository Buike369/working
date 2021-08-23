import React from 'react';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Footer from './components/footer';
import Section5 from './components/section5';
import NavBar12 from './components/navbar1';
import Section1 from './components/section1';

export default function Hompage() {
    return (
        <div>
     <NavBar12/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section5/>
      <Footer/>
            
        </div>
    )
}
