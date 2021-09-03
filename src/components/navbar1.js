
import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar1() {
    return (
        <div className="yer">
            <div className =" link3">
                <div> < img src = "Egoras-logo.svg " /> </div>
                <div>
                    <div style ={{ marginTop:'11px'}}>
                    <ul className=" feed1">
                        <li><a href= " " className=" explore fsd1"> Explore Loans</a></li>
                         <li><a href="/login"  className=" explore1 fsd"> Document </a></li>
                          <li><a href="/about"  className=" explore1 fsd"> About </a></li>
                           <li><a href="/what-problem-is-egoras-trying-to-solve"  className=" explore1 fsd"> Token Metrics </a></li>
                    </ul>
                    </div>
                </div>
                <div>
                    <div className =" link6">
                             <a href =" " className ="link4 "> Get The Loan</a>
                               
                             <a href =" "  className =" link5"> Connect Wallet</a>
                               
                    </div>
                    <div className=" tube" style={{display:''}}>
                        <div style={{marginTop:'17px'}}>
                          <div style={{width:'12px', marginBottom:'2px',border:'1px solid black'}}></div>
                          <div style={{width:'12px', marginBottom:'2px',border:'1px solid black'}}></div>
                          <div style={{width:'12px', marginBottom:'2px',border:'1px solid black'}}></div>
                        </div>
                        
                    </div>
                   
                </div>
            </div>

    

        </div>
    )
}
