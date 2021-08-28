import React, {useState}from 'react';
import './newnav.css'
import Send from './sidebars'

const Navbar3 = () => {
    

    
    return (
        <div>
            <div className="new-nav-mobile">
                <div className="fire"><img src="Egoras-logo.svg" alt=""/></div>
                 <div className="fire">
                     <div className="nav_mar" >
                        {/* <div className="nav1"></div>
                        <div className="nav1"></div>
                        <div className="nav1"></div> */}
                        <Send/>
                     </div>
                    
                 </div>
            </div>
        </div>
    )
}

export default Navbar3
