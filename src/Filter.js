import React,{useState} from "react";
import {collectionData} from "./Data.js";

const FilterData = () => {
    const [category,setCategory] = useState(collectionData);
    const handleBtns = (e) => {
        let word = e.target.value;
        if(word === "All")
        {
            setCategory(collectionData);
        }
        else if(word === "Cars")
        {
            const filtered = collectionData.filter(item=>item.kind === "Cars");
            setCategory(filtered);
        }
        else if(word === "Views")
        {
            const filtered = collectionData.filter(item =>item.kind === "Views");
            setCategory(filtered);
        }
    }
    return(
        <>
       <section>
        <h2>React Filter</h2>
        <div>
            <button value = "All" onClick = {handleBtns} >All</button>
            <button value = "Cars" onClick = {handleBtns}>Cars</button>
            <button value = "Views" onClick = {handleBtns}>Views</button>
        </div>

        <div>
            {
                category.map(item=>(
                    <div key={item.id}>
                        <div>
                            <img src = {item.linkImg} alt = {item.name}/>
                            <div>
                                <h1>{item.name}</h1>
                                <p>{item.kind}</p>
                                 <p>{item.info} </p>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
       </section>
        </>

    );
}

export default FilterData;