import React from 'react'
import Somebody from './section3';
import Art from './section2';

export default function Thirdpage() {
    return (
        <div style={{marginTop:'10px'}} className="wene"> 
            <div style={{width:'100%',padding:'10px 0px'}}>
            <div className="wind" style={{marginBottom:'5em',height:'700px'}}>
                <div>
                    <div className ="des" style={{ alignItems:'center',position:'relative'}}>
                     <div style ={{ fontWeight:'bold',marginBottom:'0.5em',color:'black'}} className="hand1">Restock your store on credit</div>
                     <div style ={{fontSize:'1.5em',color:'#E4A788',marginBottom:'0.8em'}} >FROM EGORAS MICRO-FINANCE</div>
                     <div style ={{ fontSize:' ',lineHeight:'20px',lineHeight:'2em',marginBottom:'1.3em',color:'#756c6c'}} className=" heading3">Egoras microfinance protocol helps you to restock your store on credit at a  very low-interest rate.</div>
                     <div className="cat" style={{ width:'40%',padding:'15px 5px 15px 5px', textAlign:'center',borderRadius:'10px',backgroundColor:'#2EB67D'}}><a href = " " style={{textDecoration:'none',color:'#ffffff',fontSize:'15px',fontWeight:'bold'}}> Learn more</a></div>
                     <div style={{position:'absolute',marginTop:'12em',marginLeft:'-16em'}}><img src="mark2.svg" alt=""/></div>
                   </div>
                </div>
                <div>
                   
                    <div className="podme" style={{position:'relative'}}> {/*width:'100%',height:'auto',*/}
                        <div  style={{ position:'absolute', top:'5vw',left:'5vw',zIdex:'1'}}> <img src =" mark6.svg" alt=" " width='100%'/></div> 
                         <img src =" mark2.svg" alt=" " width=" 40%" style={{ position:'absolute',top:'0px',left:'9.8vw'}}/>
                         <img src ="mark1.svg " alt=" "  width="83%"  className="pos"  style={{ position:'absolute'}}/>
                         <img src ="mark4.svg " alt=" "  width=" 3%" style={{ position:'absolute', top:'12.5vw',right:'1vw'}} />
                         <img src =" mark4.svg" alt=" " width=" 3%" style={{ position:'absolute',top:'23vw',left:'8vw'}}/>
                         <img src =" phone80.svg" alt=" " width="95%" style={{ position:'absolute',top:'5.2vw',left:'6vw'}}/>
                         <img src ="  mark3.svg" alt=" " className="pos1" width="40%" style={{ position:'absolute'}}/> 
                          <img src ="  secircle.svg" alt=" " width=" 5%" style={{ position:'absolute',top:'53vw',left:'47vw'}}/> 
                         
                    </div>
                   
                </div>
            </div>
            

            </div>
               
               {/* second section */}
               <div>
                    <div className="line4" style={{backgroundColor:' #E4A788',height:'5px'}} data-aos="fade-up"></div>
                     <div className="line5" style={{ fontSize:'4em',fontWeight:'500',textAlign:'center'}} data-aos="fade-up">How it works</div>
               </div>

               <div><img src=" " alt=""/>
               </div>

               {/*section3*/}
               <div  className="chart" style={{marginBottom:'5em'}} id="Pisuc">
                   <div className="numbers"  data-aos="fade-up">
                       <div><span style={{ fontSize:'7em',fontWeight:'bold',color:' #E4A788', }}>1.</span> <img src="how1.svg" alt=""/></div>
                        <div style={{fontSize:'1.6em',fontWeight:'600',marginBottom:'0.8em',marginTop:'0.5em'}}> Choose the products you want</div>
                        <div style ={{lineHeight:'2em',color:'#756c6c'}}> Browse by category and add to the cart the products you want to buy.</div>
                   </div>
                   <div  className="numbers"  data-aos="fade-up">
                        <div><span style={{ fontSize:'7em',fontWeight:'bold',color:' #E4A788', }}>2.</span> <img src="how2.svg" alt=""/></div>
                        <div style={{fontSize:'1.6em',fontWeight:'600',marginBottom:'0.8em',marginTop:'0.5em'}}> Verify your Account</div>
                        <div style ={{lineHeight:'2em',color:'#756c6c'}}> Upload any means of verification to verify your account.</div>
                   </div>
                   <div  className="numbers" data-aos="fade-up">
                        <div><span style={{ fontSize:'7em',fontWeight:'bold',color:' #E4A788', }}>3.</span> <img src="how3.svg" alt=""/></div>
                        <div style={{fontSize:'1.6em',fontWeight:'600',marginBottom:'0.8em',marginTop:'0.5em'}}> Down payment of 30%</div>
                        <div style ={{lineHeight:'2em',color:'#756c6c'}}> Make a down payment of 30% to complete your Purchase.</div>
                   </div>
               </div>

               <div className="king"  data-aos="fade-up"> Get Started</div>

               <div style={{marginTop:'4em'}}>
                   <div className="king4" style={{backgroundColor:' #E4A788',height:'5px',margin:'auto',marginBottom:'3em'}} data-aos="fade-up"></div>
                   <div className="king1" data-aos="fade-up">Benefits</div>
               </div>

               <Art/>

               {/* card section */}
               <div className ="chart" >
                   <div className="char" style={{  }} data-aos="fade-up">
                       <div style={{marginBottom:'2.5em',marginTop:'2em', position:'relative'}}>  <img src="renak1.svg" alt=" " width="68"/> <img src="renak.svg" alt=" " width="54" style={{position:'absolute',top:'26%',left:'10%'}}/></div>
                       <div style ={{fontSize:'1.8em',fontWeight:'600',marginBottom:'1em'}}>Build credit as you go</div>
                       <div style={{marginBottom:'2.5em',color:'##2e2f31',fontSize:'16px'}}>We designed our credit process to fit your business needs and help you grow. As you build credit with Egoras, you unlock larger credit amounts.
                          </div>
                   </div>
                    <div className="char1" style={{ borderTop:'2px solid #55BC7E' }} data-aos="fade-up">
                       <div style={{marginBottom:'2.5em',marginTop:'2em', position:'relative'}}>  <img src="cake.svg" alt=" " width="68"/> <img src="cake1.svg" alt=" " width="40" style={{position:'absolute',top:'26%',left:'10%'}}/></div>
                       <div style ={{fontSize:'1.8em',fontWeight:'600',marginBottom:'1em'}}>Restock your store on the go</div>
                       <div style={{marginBottom:'2.5em',color:'#2e2f31',fontSize:'16px'}}>We don't make you jump through hoops or fill out paperwork.Simply apply through the Egoras app and get approved in under 24 hours.
                          </div>
                   </div>
                    <div className="char2" style={{ padding:'2em 3em 2em 3em',backgroundColor:'#ffffff',borderRadius:'8px' }} data-aos="fade-up">
                       <div style={{marginBottom:'2.5em',marginTop:'2em', position:'relative'}}>  <img src="framer.svg" alt=" " width="68"/> <img src="framer1.svg" alt=" " width="64" style={{position:'absolute',top:'45%',left:'14%'}}/></div>
                       <div style ={{fontSize:'1.8em',fontWeight:'600',marginBottom:'1em'}}>Buy in bulk at the best price</div>
                       <div style={{marginBottom:'2.5em',color:'#2e2f31',fontSize:'16px'}}>Our verified supplier helps you to restock at the best market price.
                          </div>
                   </div>



               </div>
             
                 <div style ={{width:'100%',height:'3em',display:'block'}}> <img src="resend.svg " alt=" " className="sami" /><img src="mark2.svg" alt="" style={{marginLeft:'-18em',position:'static'}} className="sami" /></div>
             {/* second to last */}
             <div>
                 <div  className ="sam1" data-aos="fade-up">OUR CLIENTS SAID</div>
                 <div className="sam2" style={{ textAlign:'center',margin:'auto'}} data-aos="fade-up">  Egoras microfinance protocol provides uncollateralised micro-credit to small entrepreneurs and enterprises who cannot take shelter of banks for banking and other services.   </div>
                 <div className="sam3" style={{margin:'auto',textAlign:'center',marginBottom:'5em',marginTop:'5em',fontSize:'1.2em',color:'#626262' }} data-aos="fade-up">- Egoras Coin</div>
             </div>
            
                 <Somebody/>

                {/*arrow*/}
                <div style={{textAlign:'center'}} data-aos="fade-up"> <a href=" " style={{marginRight:'8px'}}><img src="galas.svg " width="40" alt=" "/></a>
                <a href=" " style={{marginLeft:'8px'}}><img src="galas1.svg " width="40" alt=" "/></a></div>

                <div className="swam"  data-aos="fade-up">
                    <div  className =" bag54">
                           
                         <img src ="vector.svg " alt =" " style={{backgroundColor:' #2EB67D',opacity:'0.7'}}  className ="pag2"/>
                         <img src ="soundsgood-dot.svg " alt =" " style={{position:'absolute',top:'57%',left:'4px'}}/>
                           <img src ="dng.svg " alt =" " style={{backgroundColor:' #2EB67D',opacity:'0.7'}} className=" pag3"/> 
                         <div style={{padding:'20px 15px 20px 15px',backgroundColor:'#fff',fontSize:' 1.2em',fontWeight:'500',color:'#2EB67D',borderRadius:'8px',textAlign:'center'}} className=" pag1">Explore Loans</div>
                        <div  style={{color:'white', fontWeight:'500'}} className ="pag"> Sounds good?</div>
                          
                    </div>
                    
                </div>
               

        </div>
    )
}
