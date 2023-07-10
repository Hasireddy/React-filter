import { Sourcedata } from "./Source.js";
import React,{useState} from "react";

const FilterSource = () => {
    const [data,setData] = useState(Sourcedata);
    const handleBtn = (e) =>
    {
        let word = e.target.value;
        if(word === "All")
        {
        setData(Sourcedata);
        }
        else if(word === "Animals")
        {
            const filtered = Sourcedata.filter(item =>item.type === "Animals");
            setData(filtered);
        }
        else if(word === "Birds")
        {
            const filtered = Sourcedata.filter(item=>item.type === "Birds")
            setData(filtered);
        }
        else if(word === "Flowers")
        {
            const filtered = Sourcedata.filter(item=>item.type === "Flowers");
            setData(filtered);
        }
    }
    return(
        <>
        <section>
            <div>
            <button value = "All" onClick = {handleBtn}>All</button>
            <button value = "Animals" onClick = {handleBtn}>Animals</button>
            <button value = "Birds" onClick = {handleBtn}>Birds</button>
            <button value = "Flowers" onClick = {handleBtn}>Flowers</button>
            </div>
            <div>
                {
                    data.map(item=>(
                        <div key={item.id}>
                            <div>
                                <img src = {item.linkImg} alt = {item.name}/>
                                <div>
                                    <h1>{item.name}</h1>
                                    <p>{item.type}</p>
                                </div>
                                </div>
                            </div>

                    ))
                }
            </div>
        </section>
        </>
    )
}

export default FilterSource;