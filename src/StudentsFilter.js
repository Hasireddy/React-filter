import React,{useState} from "react";
import { StudentsData } from "./StudentsData";

const StudentsFilter = () => {
    const [category,setCategory] = useState(StudentsData);
    const handleBtnClick = (e)=>{
        const word = e.target.value;
        if(word === "All")
        {
            setCategory(StudentsData);
        }
        else if(word === "Science")
        {
            const filtered = StudentsData.filter(item=>item.course==="Science");
            setCategory(filtered);
        }
        else if(word==="Arts")
        {
            const filtered = StudentsData.filter(item=>item.course === "Arts");
            setCategory(filtered);
        }
    }
    return(
        <>
        <div>
        <button value = "All" onClick = {handleBtnClick}>All</button>
        <button value = "Science" onClick = {handleBtnClick}>Science</button>
        <button value = "Arts" onClick = {handleBtnClick}>Arts</button>
        </div>
        <div>
            {
                category.map(item =>(
                    <div key = {item.id}>
                        <div>Name:{item.name}</div>
                    <div>Course:{item.course}</div>
                    </div>
                ))
            }
        </div>
        </>

    );
}

export default StudentsFilter;