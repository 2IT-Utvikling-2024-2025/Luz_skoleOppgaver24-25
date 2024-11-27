import React, { useState } from "react";

export default function ClassListCreate() {
    const [name, setName] = useState(``);
    const [ studentsIds, setStudentIds ] = useState([]);


    const handleSubmit = async (Event) => {
        Event.preventDefault();

        const classData = {
            name: name,
            listOfStudentID: studentsIds,
        };

        try {
            const response = await fetch('http://localhost:3000/api/v1/classes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(classData),
            });

        if (response.ok) {
            const result = await response.json();
            console.log(`Klasse opprettet:`, result)
        } else {
            const error = await response.json();
            console.error(`Feil ved opprettelse av klasse:`, error);
        }
    } catch (error) {
        console.error(`Feil ved opprettelse av klasse:`, error);
    }
}

return (
    <div>
        <h1> Class List Create</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Klasse navn:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(Event) => setName(Event.target.value)}
                    required
                    />
                </div>

<div>
    <label>Elev IDer (komma separeret):</label>
    <input
        type="text"
        onChange={(event) =>
            setStudentsIds(event.target.value.split(",").map((id) => id.trim()))
        }
        placeholder="Elev IDer (komma separeret)"
        required
    />
</div>
<button type="submit">Oppret klasse</button>
        </form>
        </div>
);
}