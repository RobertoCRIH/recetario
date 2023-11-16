import React, {useState,useEffect} from "react";
import MyNav from "../components/myNav";
import CardSection from "../components/cardSection";
import MyCar from "../components/carousel";

import Axios from 'axios';

const Home = ({userEmail})=>{

    const [recetas,setRecetas] = useState([]);

    // This is to get data from the table
  useEffect(()=>{
    Axios.get('http://localhost:3001/get').then((response)=>{
      setRecetas(response.data);
    })
  },[])
  console.log(recetas)

    return(
        <div>
            <MyNav user={userEmail}/>
            <MyCar/>
            <h1 className="text-center" >Nuestras mejores recetas</h1>
            <CardSection recetas={recetas}/>
            Hello, {userEmail}
        </div>
    )
}

export default Home;