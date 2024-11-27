import React, { useState } from "react";
import Student from "../Student";
import "./css/classcolors.css";


export default function ClassList() {

    const [teacher, setTeacher] = useState("Luzura")
    
    
    
    const [classList, setClassList] = useState([
        { name: "Luz", id: 1},
        { name: "Gus", id: 2},
        { name: "Amity", id: 3},
        { name: "Willow", id: 4},
        { name: "Hunter", id: 5},
        { name: "Edalyn", id: 6},
        { name: "King", id: 7},
        { name: "Philip", id: 8},
        { name: "Vee", id: 9},
        { name: "Lilith", id: 10}
    ])
 
    return(

        
        <div className="class-container">
            <div className="teacher-section">
                <h2>Lærer: {teacher}</h2>
            </div>
            <h1>klasse Liste</h1>
            <ul className="student-list">
                {classList.map((student) => (
                    <li key={student.id} className="student-item">
                        <Student name={student.name} />
                    </li>
                ))}
            </ul>
        </div>

        
        
        
        
        
        
        
        
        
        
        
        
        
        /*
        
        <div>

        <student name={teacher} />
        
        <h1>klasse Liste</h1>
        {classList.map(student => (
            <Student key={student.id} name={student.name} />
        
        
        ))}
        </div>


        */

    

                
    
    )

}



