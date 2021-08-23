import React from 'react';
import './navbar.css';

export default function Navbar() {


   const navItem = ['Explore loans','Document', 'About', 'Token'];
   const navbar1 = navItem.map((bag) =>(<li style ={styles.desk}> <a href =""  className ="link1 ">{bag}</a></li>));

    const navItem1 = ['Get The Loan', 'Connent Wallet'];
    const navbar2 = navItem1.map((bag1)=>(<a href =" " style ={styles.desk3} >{bag1}</a>));


    return (
        <div>
            <div className ="link2">
                <div className =" "><img src ="Egoras-logo.svg" /></div>
                <div>
                    <ul>
                        {navbar1}
                   </ul>
                </div>
                <div>
                     <div >{navbar2} </div>
                </div>
            </div>
            
        </div>
    )
}


const styles = {
   desk:{
       display:'inline-block',
       listStyle :'none',
   } ,
   desk2:{
       textDecoration:'none'
   },
   desk3:{
       margin:'26px  8px 0px 8px',
       textDecoration:'none',
        border:'1px solid greenyellow',
        padding:'8px',
   },
   desk4:{
       padding :'4px',
    
       
   }
   
}