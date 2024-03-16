import React, { useState } from "react";
import { Habit } from "./HabitItem";

interface NewHabitForProps {
    onAdd: (habit: Habit) => void;
}


const NewHabitForm: React.FC<NewHabitForProps> = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newHabit: Habit = {
            id: Date.now(),
            name: name.trim(),
            description: description.trim(),
            completed: false,
        };
        onAdd(newHabit);
        setName("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">習慣の名前</label>
                <input 
                  type="text"
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
            </div>
            <div>
                <label htmlFor="description">習慣の名前</label>
                <textarea 
                  id="descripption"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">追加</button>
        </form>
    );
}

export default NewHabitForm;