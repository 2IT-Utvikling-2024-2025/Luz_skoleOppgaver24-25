import { useState } from "react";
import "./MyHobbies.css"




const hobbies = [
    { title: "Utvikling", isFavorite: true, upVote: 0, id: 1},
    { title: "Gaming", isFavorite: false, upVote: 0, id: 2}
]


export default function MyHobbies() {

    const listitems = hobbies.map(hobby =>
    <li key={hobby.id} style={  {  color: hobby.isFavorite ? "magenta"  :  "magenta" }  }>
        {hobby.title}
        <voteButton></voteButton>
    </li>
);


return (
    <>
        <h1 className="header">Luz Bright Svendsen</h1>
        <ul>{listitems}</ul>
    </>
    
)
}

function voteButton() {
    const [vote, setvote] = useState(0)

    function handleClick( ){
        setvote(vote + 1)
    }



    return (
        <button className= "button" onClick={handleClick}>
            Voted
        </button>

    

    )
}
 



