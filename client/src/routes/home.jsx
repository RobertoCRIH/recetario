import React from "react";
import MyNav from "../components/myNav";
import MyCard from "../components/card";

const Home = ({userEmail})=>{
    return(
        <div>
            <MyNav user={userEmail}/>
            <MyCard/>
            Hello, {userEmail}
        </div>
    )
}

export default Home;