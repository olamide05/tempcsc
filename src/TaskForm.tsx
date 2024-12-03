import { useState } from "react";

function TaskForm({ addTask }) {
    const [taskTitle, setTaskTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle.trim()) {
            addTask({ title: taskTitle });
            setTaskTitle(""); // Clear input
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Add a task..."
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;




