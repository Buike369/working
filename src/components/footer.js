import React,{useState,useEffect} from 'react';
import { FaFacebookF } from 'react-icons/fa';
import {FaTwitter} from  'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
export default function Footer() {
      
      const Hides = window.location.pathname;
    const [col,setcol] = useState(false);
    // const [hide,setHides] = useState('/login');


//   const Fill = ()=>{
//         if(Hides === '/login'){
//         setHides(!hide)
//        }
//   }

    //    const Happy = () =>{
    //       if(Hides === '/login'){
    //    setHides(!hide)
    //   }
    //    }

      useEffect(()=>{
  if(Hides === '/login'){
      document.getElementById('racing').style.display = 'none'
    }

  if(Hides === '/signup'){
    document.getElementById('racing').style.display = 'none'  
  }
   }
 );
    const Footy = [{header:'General',link1:'Home',link2:'Explore Loans',link3:'Documentation',link4:'Pitch Desk'},{header:'About Us',link1:'How It Works',link2:'Our Team',link3:'Stories',link4:'Token metrics'},{header:'Legal',link1:'Privacy policy',link2:'Terms & Conditions',link3:'Partners',link4:'Contacts'},{header:'Contact Us',link1:'Get in Touch Today',link2:'08167029609',link3:' ',link4: 'info@egors.com'}]
 
    const rer ={color:'green'};
    return (
         
        
        <div  className="footers12" id="racing" >
            <div className =" footer2">
                <div>
                    <div> <img src =" Egoras-Logo.svg" alt =" " style={{marginBottom:'1.8em'}}/></div>
                    <div>
                        <div style={{display:'flex', alignItems: 'flex-end',width:'70%',height:'85px',justifyContent:'space-around'}}>
                            {/* <a href=" "><img src="fag3.svg " alt=" " width="25"  style ={{padding:' 9px 7px ', border:'1px solid #55BC7E',borderRadius:'50%'}}/></a> */}
                            <a href=" "   style={{padding:'6px 8px',borderRadius:'50%',border:'1px solid green',color:'green'}}><FaFacebookF /></a>
                             <a href=" "  style={{padding:'6px 7px',borderRadius:'50%',border:'1px solid green',color:'green'}}><FaTwitter/> </a>
                              <a href=" "  style={{padding:'8px 8px 6px',borderRadius:'50%',border:'1px solid green',color:'green'}}><FaYoutube/></a>
                               <a href=" "  style={{padding:'6px 7px',borderRadius:'50%',border:'1px solid green',color:'green'}}><FaInstagram/></a>
                             {/* <img src="fils.svg " alt=" " width="16"  style ={{padding:' 12px 12px ', border:'1px solid #55BC7E',borderRadius:'50%'}} */}
                             {/* <img src="you.svg " alt=" " width="16"  style ={{padding:' 12px 12px ', border:'1px solid #55BC7E',borderRadius:'50%'}}/ */}
                             {/* <img src="facebook.svg " alt=" " width="9"  style ={{padding:' 10px 14px ', border:'1px solid #55BC7E',borderRadius:'50%'}}/> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div className =" gas">
                   {  Footy.map((send)=>(<ul className = " footer3">
                        <li className =" footer6 speed" style={{marginBottom:'1.5em'}}>{send.header}</li>
                        <li className =" footer5 speed"><a href = " " className ="footer4 "> {send.link1}</a></li>
                        <li className =" footer5 speed"><a href = " " className ="footer4 ">{send.link2} </a></li>
                        <li  className =" footer5 speed"><a href = " " className ="footer4 ">{send.link3} </a></li>
                        <li className =" footer5 speed"><a href = " " className ="footer4 ">{send.link4} </a></li>
                    </ul>
                   )) }
                   </div>
                </div>
                
            </div>


<div style={{width:'30%',textAlign:'center',margin:'auto',fontWeight:'bold',marginBottom:'10px'}}>© 2021 Egoras Foundation</div>
        </div> 
  
    

    )
}
