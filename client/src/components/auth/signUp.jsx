import React, {useState} from "react";
import {auth} from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = ()=>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const SignUp = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential)
            navigate("/home");
        }).catch((error)=>{
            console.log(error)
        })
        
    }

    //Esto es lo que va a manejar el cambio de rutas al dar clic
    const navigate = useNavigate();

    return(
        <div className="sign-in-container off">
            <form onSubmit={SignUp}>
                <h1>Create an account</h1>
                {/* Email Input */}
                <input type="email" 
                    placeholder="Enter Your Email" 
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}>
                </input> <br />
                {/* Password Input */}
                <input type="password" 
                    placeholder="Enter Your Password" 
                    value={password} 
                    onChange={(e)=>{setPassword(e.target.value)}}>
                </input> <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
} 

export default SignUp;