function TaskList({ tasks, selectedDay, deleteTask }) {
    const filteredTasks = tasks.filter((task) => task.day === selectedDay);

    return (
        <div className="task-list">
            <h2>{selectedDay}'s Tasks</h2>
            {filteredTasks.length === 0 ? (
                <p>No tasks for {selectedDay}</p>
            ) : (
                filteredTasks.map((task) => (
                    <div key={task.id} className="task-item">
                        <span>{task.title}</span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default TaskList;



