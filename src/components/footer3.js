import React from 'react';
import './mobileFooter.css';

export default function Footer3() {
    return (
        <div className=" foote3m">
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
                    <div><div className="when "><a href=" ">General <div><img src="down-arrrow.svg" alt=""/>  </div></a></div> </div>
                    <div> <div className=" when"> <a href=" ">About Us <div><img src="down-arrrow.svg" alt=""/></div></a></div></div>
                    <div> <div className=" when"> <a href=" ">Legal <div><img src="down-arrrow.svg" alt=""/></div></a></div></div>
                </div>
            </div>
        </div>
    )
}
