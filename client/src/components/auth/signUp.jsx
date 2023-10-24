import React, {useState} from "react";
import {auth} from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = ()=>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const SignUp = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return(
        <div className="sign-in-container">
            <form onSubmit={SignUp}>
                <h1>Create an account</h1>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
} 

export default SignIn;