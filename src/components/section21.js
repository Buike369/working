import React from 'react'
import './section3.css'

export default function Section3() {
   
  const Roll =[{img:'cap2.png', price:'#800,000',tag:'RETAIL', interest:'interest 24% APY ', header:'For identity photo studio'},{img:'drop.png', price:'#100,000',tag:'WOMEN', interest:'interest 24% APY ', header:'For the expansion of a bar and restaurant'},{img:'agric.png', price:'#700,000',tag:'AGRICULTURE', interest:'interest 24% APY ', header:'To improve resteurant'}]
    //  const Rolls =[{img:'cap2.png', price:'#800,000',tag:'RETAIL', interest:'interest 24% APY ', header:'For identity photo studio'},{img:'cap2.png', price:'#800,000',tag:'RETAIL', interest:'interest 24% APY ', header:'For identity photo studio'},{img:'cap2.png', price:'#800,000',tag:'RETAIL', interest:'interest 24% APY ', header:'For identity photo studio'}]
    


    return (
        <div className=" sect45">
            <div style={{padding:'  0px 80px',marginBottom:'120px'}}> <h3 style={{fontSize:'3.5em'}}>No Loans Found</h3></div>
          
        </div>
    )
}


const styles = {
    first:{
        padding:'8px 15px 8px 15px',
        backgroundColor:' #55BC7E',
        borderRadius:'8px',
        color:'white',
         textDecoration:' none',
           marginRight:'10px',
    },
    second:{
         padding:'8px 15px 8px 15px',
          borderRadius:'8px',
          boxShadow: '-1px 1px 5px 1px rgba(80, 79, 79, 0.08)',
          border: '1px solid rgba(108, 108, 108, 0.25)',
          background:'#FFFFFF' ,
          boxSizing: 'border-box',
          textDecoration:' none',
          marginRight:'10px',
    },
    fir:{
      textDecoration:' none',
      marginLeft:'5px',
      fontWeight:'bold'
    },
    third:{
     marginLeft:'10px'   
    }
    
}