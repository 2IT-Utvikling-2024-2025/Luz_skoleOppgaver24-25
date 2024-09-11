import { useState } from "react";

const className = "2ITA"


const school = {
    name: "Dromtorp",
    numberOfStudent: 600,
    adress: "Dynamittveien 25B"

}



const ClassTable = [
    { name: "Luz", id: 1},
    { name: "Gus", id: 2},
    { name: "Amity", id: 3},
    { name: "Willow", id: 4},
    { name: "Hunter", id: 5},
    { name: "Edalyn", id: 6},
    { name: "King", id: 7},
    { name: "Emperor Belos", id: 8},
    { name: "Vee", id: 9},
    { name: "Lilith", id: 10},
]






export default function ClassTable() {


    const classList = classTable.map(

        student =>
            <li> key={student.id}>

                <classItem student={classTable[student.id - 1]} ></classItem>

            </li>


    )
        
    
    return(
        <>

            <h1>{school.name}</h1>
            
            <h1>klasse {className}</h1>

            <ul> {classList} </ul>

        </>
    
    
    )

}