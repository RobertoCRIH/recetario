import React, {useState} from "react";
import {auth} from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const SignUp = ()=>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const SignIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return(
        <div className="sign-in-container">
            <form onSubmit={SignIn}>
                <h1>Log into your account</h1>
                {/* Email Input */}
                <input type="email" 
                    placeholder="Enter Your Email" 
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}>
                </input>
                {/* Password Input */}
                <input type="password" 
                    placeholder="Enter Your Password" 
                    value={password} 
                    onChange={(e)=>{setPassword(e.target.value)}}>
                </input>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
} 

export default SignUp;