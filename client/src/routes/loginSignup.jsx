import {React} from 'react';
import SignIn from '../components/auth/signIn';
import SignUp from '../components/auth/signUp';


const LoginAndSignup = ()=>{
    return(
        <div>
            <SignIn/>
            <SignUp/>
            {/* <AuthDetails/> */}
        </div>
    )
}

export default LoginAndSignup;