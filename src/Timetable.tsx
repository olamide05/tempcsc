import React, { useState } from "react";
import "./Timetable.css";

function Timetable() {
    const [schedule, setSchedule] = useState([]);
    const [task, setTask] = useState("");
    const [day, setDay] = useState("Monday");
    const [startTime, setStartTime] = useState("08:00");
    const [endTime, setEndTime] = useState("09:00");

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Add a new task
    const addTask = (e) => {
        e.preventDefault();
        setSchedule((prev) => [
            ...prev,
            { id: Date.now(), task, day, startTime, endTime },
        ]);
        setTask("");
        setDay("Monday");
        setStartTime("08:00");
        setEndTime("09:00");
    };

    // Calculate grid row and column based on time
    const calculateGridPosition = (start, end) => {
        const startRow = parseInt(start.split(":")[0]) - 8 + 1; // Start row (8 AM = row 1)
        const endRow = parseInt(end.split(":")[0]) - 8 + 1; // End row
        return { startRow, endRow };
    };

    return (
        <div className="timetable-container">
            <form onSubmit={addTask} className="task-form">
                <input
                    type="text"
                    placeholder="Task Name"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                />
                <select value={day} onChange={(e) => setDay(e.target.value)}>
                    {days.map((d) => (
                        <option key={d} value={d}>
                            {d}
                        </option>
                    ))}
                </select>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                />
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                />
                <button type="submit" className="add-task-btn">
                    Add Task
                </button>
            </form>

            {/* Timetable Grid */}
            <div className="timetable-grid">
                {/* Render Days */}
                <div className="header-row">
                    <div></div> {/* Empty cell for time labels */}
                    {days.map((day) => (
                        <div key={day} className="day-header">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Render Time Rows */}
                {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className="time-row">
                        <div className="time-label">{`${8 + i}:00`}</div>
                        {days.map((day) => (
                            <div key={day} className="time-cell">
                                {/* Render Task if Present */}
                                {schedule
                                    .filter((item) => item.day === day)
                                    .map((item) => {
                                        const { startRow, endRow } = calculateGridPosition(item.startTime, item.endTime);
                                        if (startRow === i + 1) {
                                            return (
                                                <div
                                                    key={item.id}
                                                    className="task-block"
                                                    style={{
                                                        gridRow: `${startRow} / ${endRow}`,
                                                    }}
                                                >
                                                    {item.task}
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timetable;




