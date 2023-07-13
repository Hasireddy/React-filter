import React from "react";
import Data1 from "./Data1.js";
import "./App.css";

const Data1Filter = () => {
    const [finaldata,setFinaldata] = React.useState(Data1);
    const handleClear = () =>{
        setFinaldata([]);
    }

    const handleRemove = (id) => {
        const filtered = finaldata.filter(item =>item.id !== id);
        setFinaldata(filtered);

    }
    return(
        <>
        {
            finaldata.map(item=>{
                return(
                    <div  className = "collection" key = {item.id}>
                        <div>Country: {item.country}</div>
                        <div>Continent: {item.continent}</div>
                        <div>Currency: {item.currency}</div>
                        <button onClick = {()=>handleRemove(item.id)}>Remove</button>
                    </div>
                )}
            )
        }
        <button onClick = {handleClear}>Clear all</button>
        </>
    )
}

export default Data1Filter;