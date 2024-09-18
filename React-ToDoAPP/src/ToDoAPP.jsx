import { useState } from 'react';
import ReactDOM from 'react-dom/client';



export default function TodoApp() {
    const [Task, setTask] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`the task you completed: ${Task}`)

    
    
    
    
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter which task you completed:
                <input 
                type="text"
                value={name}
                onChange={(e) => setTask(e.target.value)}
                />    
            </label>
            <input type="submit" />
        </form>
    )
}
