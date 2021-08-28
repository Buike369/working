import React from 'react'

const Sign_up = () => {
    return (
        <div>
            <div className="login">

             <div  className="there">
             <div>
            <div className="login1">
              <p className="formPt">Please, check your browser’s address bar to be sure you’re on https://egoras.com</p>
            </div>
            <div className="login2">
                <form>
                    <div>
                      <h5 className="login3">
                         Sign up to Egoras
                      </h5>
                      <p className="to_sign">
                         To sign up, please type in the details provided for you .
                      </p>

                      <div className="nike">
                          <label className="sign_up5 ">Name</label><br/>
                          <input type="text" placeholder ="full_name" className="formInput" />
                      </div>
                       <div className="nike">
                          <label className="sign_up6 ">Email</label><br/>
                          <input type="email" placeholder ="Email" className="formInput" />
                      </div>
                      <div className="nike">
                          <label className="sign_up6 ">Password</label><br/>
                          <input type="password" placeholder ="Password" className="formInput" />
                      </div>
                       <div className="nike">
                          <label className="sign_up6 ">Confirm Password</label><br/>
                          <input type="password" placeholder ="Password" className="formInput" />
                      </div>
        
                      
                      <div className="signInDiv"><a href=" " className="signInBtn" >Sign Up</a></div>
                      <div className="signUpBtn"><a href="/login"  className="sign-up">Sign In</a></div>
                 </div>
                </form>
            </div>
            </div>
        

            <div>
                <div className="loginDiv">
                   <img src="login-img.svg" alt=" "  className="imgWidth" />
                </div>
            </div>

            </div>
          </div>  
        </div>
    )
}

export default Sign_up;
