import React from "react";
import MyCard from "./card";
import "../styles/cardSection.css"

const CardSection = ({recetas})=>{

    return(
        <div className="cardSectionWrapper">
            <div className="cardSection">
                {recetas.map((val)=>{
                    return(
                        <MyCard title={val.nombre} autor={val.autor} likes={val.likes}/>
                        
                    )
                })}
            </div>
        </div>
        
    )

}

export default CardSection;