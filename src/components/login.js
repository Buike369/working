
import React from 'react';
import {Link} from  'react-router-dom';
import './login.css';

const Login = () => {
    return (
        <div className="login">

            <div className="there">
        <div>
            <div className="login1">
                <p className="formPt">Please, check your browser’s address bar to be sure you’re on https://egoras.com/login</p>
            </div>
            <div className="login2">
                <form>
                    <div>
                      <h5 className="login3">
                         Sign in to Egoras
                      </h5>
                      <p className="to_sign">
                         To sign in, please type in the email address linked to your Egoras account and your Egoras password.
                      </p>

                      <div className="email_div">
                          <label className=" ">Email Address</label><br/>
                          <input type="email" placeholder ="Email" className="formInput" />
                      </div>
                       <div className="nike">
                          <label className=" ">password</label><br/>
                          <input type="password" placeholder ="Password" className="formInput" />
                      </div>
                      <p className="forgot" ><a href=" " className="pasi">Forgot password? </a> <a href=" "  className="pasy"><span className="resetColor">Reset it</span></a></p>
                      
                      <div className="signInDiv "><a href=" "  className="signInBtn">Sign In</a><br/></div>
                      <div className="signUpBtn"><a href="/signup " className="sign-up">Sign Up</a></div>
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
    )
}

export default Login;

