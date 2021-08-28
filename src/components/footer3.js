import React,{useEffect} from 'react';
import './mobileFooter.css';

export default function Footer3() {

    const Food = window.location.pathname;

    useEffect(()=>{
        if(Food === '/login'){
           document.getElementById('what').style.display ='none';}

     if(Food === '/signup'){
   document.getElementById('what').style.display = 'none' ; 
  }
    });



    return (
        <div className=" foote3m" id="what">
            <div className=" ">
                <div className="mobileFooterImg"> <img src="Egoras-Logo.svg " alt=""/></div>
                <div className="get-in">Get in Touch Today</div>
                <div className="nums"> 08167029609</div>
                <div className="info">info.@egoras.com</div>
                <div className=" footlink">
                     <a href=" "><img src="fag3.svg " alt=" " width="25"  style ={{padding:' 9px 7px ', border:'1px solid #55BC7E',borderRadius:'50%'}}/></a>
                    <a href=" "><img src="facebook.svg " alt=" " width="9"  style ={{padding:' 10px 14px ', border:'1px solid #55BC7E',borderRadius:'50%'}}/></a>
                    <a href=" "><img src="fils.svg " alt=" " width="16"  style ={{padding:' 12px 12px ', border:'1px solid #55BC7E',borderRadius:'50%'}}/></a>
                    <a href=" "><img src="you.svg " alt=" " width="16"  style ={{padding:' 12px 12px ', border:'1px solid #55BC7E',borderRadius:'50%'}}/></a>
                </div>
                <div className="lastfooter"> 
                    <div>
                        <div className="when ">General</div>
                         <div className="dimi"><a href=" ">Home </a></div>
                         <div className="dimi"> <a href=" ">Loans</a></div>
                         <div className="dimi"><a href=" ">Documentation </a></div>
                         <div  className="dimi"> <a href=" ">pitch Desk </a></div>
                     </div>
                    <div  > <div className=" when"> About Us </div>
                    <div className="dimi"><a href=" ">How it Works</a></div>
                     <div className="dimi"><a href=" ">Our teams </a></div>
                      <div className="dimi"><a href=" "> Stories</a></div>
                       <div className="dimi"> <a href=" ">Token Metrics </a></div>
                    </div>
                    <div> <div className=" when"> Legal </div>
                    <div className="dimi"><a href=" ">Privacy Policy</a></div>
                     <div className="dimi"> <a href=" ">Terms and Conditions </a></div>
                     <div className="dimi"><a href=" ">Partners</a></div>
                        <div className="dimi dimi2"><a href-=" ">Contacts </a></div>

                    </div>
                </div>
            </div>
        </div>
    )
}
