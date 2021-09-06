import React from 'react';
import {  BrowserRouter as Router,Link} from 'react-router-dom';
import './news.css';
import {FiSearch} from 'react-icons/fi';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function Newpage2() {

    // const openCity=(evt,cityName)=>{
    //     let i,tabcontent, tablinks;
    //     tabcontent = document.getElementsByClassName('tabcontent');
    //     for (i = 0; i < tabcontent.length;i++){
    //         tabcontent[i].style.display ="none";
    //     }
    //     tablinks = document.getElementByClassName('tablinks');
    //     for (i = 0; i < tablinks.length; i++){
    //         tablinks[i].className = tablinks[i].className.replace('active'," ");
    //     }
    //     document.getElementById(cityName).style.display = "block";
    //     evt.currentTarget.className += "active";
    // }

    // document.getElementById('defaultOpen').onClick();
    // const page = openCity(evt,'first');
    // const page1 = openCity(evt,'second');

    const PathWay = window.location.pathname;

    // useEffect(()=>{
    //     if(PathWay === '/about/introduction'){
    //         document.getElementById('introduction').style.display =" block";
    //     }
    // })
    return (
        <Router>
            
        <div style ={{width:'100%'}}>
            <div className ="gala">
                
                <div className="story1">
                    <div>
                        <div className="sweet">
                            <form>
                                <div className="SearchDiv">
                                      <input type="search" placeholder="Search" className="formSearch" style={{paddingTop:'14px',paddingBottom:'14px',borderRadius:'8px',paddingLeft:'10px', marginBottom:'3em'}}/>
                                       <FiSearch  className="btnSearch"/>
                                </div>
                               
                            </form>
                        </div>
                        <div style={{border: '1px solid #DADADA',width:'70%',marginBottom:'4em',marginLeft:'13px'}} > </div>
                        <div style={{fontWeight:'',marginBottom:'3em'}} className="sweet sweet1 tablinks"  id="defaultOpen" ><a href="/introduction"> Introduction </a></div>
                        <div style={{color:' #E4A788',fontSize:'0.8em',marginBottom:'3em'}} className="sweet">GETTING STARTED</div>
                        <div>
                            <ul className=" rent" data-aos="fade-right">
                                <li><a href ="/what-problem-is-egoras-trying-to-solve " style={{fontWeight:'600'}} className="tablinks"  >  What problem is Egoras trying to Solve</a></li>
                                <li><a href ="/Egoras-decentralized-autonomous-organization "> Egoras Decentralized Autonomous<br/> Organisation</a></li>
                                <li><a href ="/Lending-partner-governance "  style={{paddinTop:'15px'}}> Lending Partner Governance</a></li>
                                <li><a href ="/Loan-approval-governance ">Loan Approval Governance</a></li>
                                <li><a href ="/interest-rate-governance "> Interest Rate Governance</a></li>
                                <li><a href ="/interest-sharing-formula"> Interest sharing formula</a></li>
                            </ul>
                        </div>
                        <div style={{color:' #E4A788',fontSize:'0.8em',marginBottom:'3em',marginTop:'2.5em'}} className="sweet">UNCOLLATERALIZED LENDING MODULE</div>
                        <div >
                            <ul className=" rent" data-aos="fade-right">
                                <li><a href=" " > Loan Application</a></li>
                                 <li><a href=" " > Approved Company</a></li>
                                 <li id = "cup"><a href="/repay-loan " > Repay Loan</a></li>
                                 <li><a href=" " > Reward Voters</a></li>
                                 <li><a href=" " > Distribute Interest To Egr Holders</a></li>
                                 <li><a href=" " > Create Governance Request</a></li>
                                 <li><a href=" " > Governance Vote</a></li>
                                 <li><a href=" " > Validate Governance Request</a></li>
                            </ul>
                        </div>
                        <div style={{color:' #E4A788',fontSize:'0.8em',marginBottom:'3em',marginTop:'2.5em'}} >EGORAS TREASURY SYSTEM</div>
                        <div>
                            <ul className="rent" data-aos="fade-right">
                                <li><a href=" ">How Egoras Treasury Work </a></li>
                                <li><a href=" ">Block Rewards </a></li>
                                <li><a href=" "> How is the Treasury capitalized</a></li>
                            </ul>
                        </div>
                        <div style={{color:' #E4A788',fontSize:'0.8em',marginBottom:'3em',marginTop:'2.5em'}} className="sweet" >EGORAS TOKEN ECONOMY</div>
                        <div>
                           <ul className=" rent" data-aos="fade-right">
                               <li><a href=" "> Introduction</a></li>
                                <li><a href=" ">The Egoras Dollar (EUSD) </a></li>
                                 <li><a href=" "> Egoras Governance Token(EGR)</a></li>
                                  <li><a href=" "> Summary</a></li>
                           </ul>
                        </div>
                    </div>
                </div>
                


                 <div>
                     <div>
                         <div style ={{width:'53px',height:'4px',backgroundColor:'#e4a788',marginBottom:'2em'}}></div>

{/*                             
                                 <div className ="card2  tabcontent" data-aos="flip-right" id="introduction first" > 
                                   <div style={{ display:'flex',alignItems:'center',height:'150px',justifyContent:'space-between', padding:'3px 25px',}} >
                                       <div>
                                           <p style={{color:'grey',fontSize:'13px'}} > Next</p>
                                           <div> what problem is Egoras </div>
                                           <div> trying to solve</div>
                                       </div>
                                       <div><img src="galas1.svg " alt=" " /></div>
                                   </div>
                                
                               </div> */}
                            
                          <div className="tabcontent" id="second">
                            
                         <div>
                             <h2 style={{marginBottom:'1em'}} className="funny"  data-aos="fade-left" data-aos-duration="3000"> What problem is Egoras trying to solve?</h2>
                             <p style={{lineHeight:'2em',width:'100%',color:'#15171c',fontSize:'0.9em'}} className="" >It was thought that the advent of microfinance in the 1970s and 1980s would eradicate or drastically reduce the pervading poverty at the time. However, four decades into the pioneering work of Mohammad Yunus in Bangladesh and the establishment of the Grameen Bank in 1983, the goals of microfinance have not been met. Without a doubt, there are several barriers to the financial success of the microfinance organization when compared to other financial organizations or mainstream banks.</p>
                             <p style={{marginTop:'2em',lineHeight:'2em',width:'100%',color:'#15171c',fontSize:'0.9em'}} className="" >The first is the higher interest rate. It is generally acknowledged that most microfinance institutions charge a very high rate of interest when compared to commercial banks. This is usually at the detriment of the borrowers with attendant consequences such as depression and even suicide. Secondly, there appears to be overdependence of microfinance organization on the prevailing banking System. This is because most microfinance institutions operate as Non-Governmental Organizations (NGOs), and they are reliant on financial institutions such as commercial banks for stabilized funding to carry out their own lending activities. This overdependence of microfinance institution on banks makes them incompetent as a lending partner. Finally, there is the problem of over-indebtedness. Notably, the microfinance sector gives loans without collateral, and this increases the risk of bad debts.</p>
                             <img src="send-for-kingsley-2.svg " alt=" " className=""  style={{marginTop:'3em',width:'100%'}}/>
                             <p style={{marginTop:'2.5em',lineHeight:'2em',width:'100%',color:'#15171c',fontSize:'0.9em'}}  className="">Egoras microfinance protocol seeks to address the challenges identified above. Addressing the challenges would mean that loans should be given at very low interest when compared to mainstream banks, and collaterals should be required to get the loans. This also means a microfinance institution, not dependent on mainstream banks. To solve the high-interest rate problem, Egoras protocol introduces on-chain governance where the interest rates are determined by the people, in which no central body or company determine the interest. In other words, the users determine the interest rate. To address the dependence issue, the Egoras protocol uses an on-chain treasury system to make sure that Egoras protocol doesn’t lack the funds or liquidity for the loans and these funds are governed by the people. Finally, the Egoras protocol introduces collateral lending to address over-indebtedness in the microfinance sector. In this regard, small businesses’ assets will be converted to non-fungible tokens and they represent the collateral. These assets will be sold off when the borrower defaults in repaying the loan.</p>
                         </div>
                          <div style={{display:'flex',marginTop:'3em'}} id="submit">
                              <div className ="card1 " > {/*data-aos-duration="3000"*/}
                                  <div style={{ display:'flex',alignItems:'center',height:'150px',justifyContent:'space-between', padding:'3px 25px'}}>
                                       <div><img src="galas.svg " alt=" "  className="galasImg"/></div> 
                                        <div>
                                            <div style={{color:'#87d4b3'}}>previous</div>
                                            <div>Introduction</div>
                                        </div>
                                  </div>
                              </div>
                               <div className ="card1"> 
                                   <div style={{ display:'flex',alignItems:'center',height:'150px',justifyContent:'space-between', padding:'3px 25px',}} >
                                       <div>
                                           <div > Next</div>
                                           <div> Egoras Decentralized</div>
                                           <div> Autonomous Organization</div>
                                       </div>
                                       <div><img src="galas1.svg " alt=" " /></div>
                                   </div>
                                
                               </div>
                          </div>
                          
                          </div>

                          
                     </div>
                 </div>
            </div>
        </div>
        
        </Router>
    )
}
