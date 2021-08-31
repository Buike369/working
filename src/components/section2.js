import React from 'react'

export default function Section2() {
    return (
        <div className="mobile-pending">
            <div className ="make">
                <div>
                    <form>
                        <div className ="make1">
                           <div>
                             <select name="cars" className="cars" onChange="window.location =this .value;" >
                                 <div > All Categories</div>
                                 
                                 <option value=""  className="motor">food</option>
                                 <option value="/login" className="motor">Saab</option>
                                 <option value=" " className="motor" >Opel</option>
                                 <option value=" " className="motor">Audi</option>
                                 
                              </select>
                          </div>
                          <div className =" make2 interest">
                            <div ><span className ="range ">INTEREST RANGE :</span></div>
                            <div> <div className =" range1"> <div style ={{padding:'5px',color:'black',fontWeight:'bold',fontSize:'18px',margin:'auto',}}>0</div><div className =" range9" ></div>  <div style ={{padding:'5px',color:'black',fontWeight:'bold',fontSize:'18px',margin:'auto'}}>100</div></div></div>
                            <label className =" range4">%</label>
                          </div>
                        </div>
                    </form>
                </div>
                <div> 
                    <div className ="john">
                        <div className ="flake">
                    < div className ="make2 ">
                        
                      <div><div className =" status">STATUS : </div> </div>  
                        <div>
                          <div className=" guide">
                             <a href =" "  className=" alink jink">Ongoing</a>
                             <a href =" "  className="alink jink1">Approved</a>
                             <a href =" "  className="alink jink1 ">Declined</a>
                          </div>
                       </div>
                      
                    </div>
                    </div>
                </div>
                <div>

                </div>
               </div>
            </div>
        </div>
    )
}
