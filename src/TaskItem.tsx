import React from "react";

interface Task {
    id: string;
    taskName: string;
    startTime: string;
    endTime: string;
}

interface TaskItemProps {
    task: Task;
    deleteTask: (taskId: string) => void;
}

const getTaskItemStyle = (): React.CSSProperties => ({
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

const getButtonStyle = (): React.CSSProperties => ({
    backgroundColor: "#ff0000",
    color: "white",
    border: "none",
    borderRadius: "3px",
    padding: "5px 10px",
    cursor: "pointer",
});

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask }) => {
    return (
        <div style={getTaskItemStyle()}>
            <div>
                <strong>{task.taskName}</strong>
                <p>
                    {task.startTime} - {task.endTime}
                </p>
            </div>
            <button onClick={() => deleteTask(task.id)} style={getButtonStyle()}>
                Delete
            </button>
        </div>
    );
}

export default TaskItem;
