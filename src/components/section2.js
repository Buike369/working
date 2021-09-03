import React from 'react'

export default function Section2() {
    return (
        <div className="mobile-pending">
            <div className ="make">
                <div>
                    <form>
                        <div className ="make1">
                           <div>
                             <select name="cars" className="cars">
                                 
                                 <option value="volvo" style={{padding:'80px'}}>All Categories</option>
                                 <option value="saab" >Saab</option>
                                 <option value="opel" >Opel</option>
                                 <option value="audi" >Audi</option>
                                 
                              </select>
                          </div>
                          <div className =" make2 interest">
                            <div ><span className ="range ">INTEREST RANGE :</span></div>
                            <div> <div className =" range1" style={{overflow:'hidden'}}> <div ><input type="number" placeholder="0" max="100"  style ={{padding:'5px',color:'black',fontWeight:'bold',appearance:'text-flied',fontSize:'13px',margin:' 12px 15px',width:'50%',textAlign:'center',outline:'none',border:'0'}}/></div><div className =" range9" ></div>  <div><input type="number" placeholder="100"  style ={{padding:'5px',color:'black',fontWeight:'bold',fontSize:'13px',margin:' 12px 15px',width:'50%',outline:'none',border:'0'}}/></div></div></div>
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
                               <a href ="/any "  className="alink jink1 ">Any</a>
                             <a href ="/ongoing "  className=" alink jink">Ongoing</a>
                             <a href ="/approve "  className="alink jink1">Approved</a>
                             <a href ="/decline "  className="alink jink1 ">Declined</a>
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
