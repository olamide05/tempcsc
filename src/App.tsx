import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import DaysCarousel from "./DaysCarousel";
import Sidebar from "./SideBar"; // Ensure correct import if the file is SideBar.tsx

// Task Type
interface Task {
    id: number;
    title: string;
    day: string;
}

function App() {
    const [theme, setTheme] = useState("light");
    const [tasks, setTasks] = useState<Task[]>([]); // Use Task type for tasks
    const [selectedDay, setSelectedDay] = useState("Monday");
    const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state

    // Set initial theme based on system preference
    useEffect(() => {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDarkMode ? "dark" : "light");
    }, []);

    // Apply theme to body
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    // Add a new task
    const addTask = (newTask: Task) => {
        setTasks((prevTasks) => [...prevTasks, { ...newTask, id: Date.now(), day: selectedDay }]);
    };

    // Delete a task by ID
    const deleteTask = (taskId: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen((prevState) => !prevState);
    };

    return (
        <div className={`app ${theme === "dark" ? "dark-mode" : ""}`}>
            <header>
                <button className="hamburger" onClick={toggleSidebar}>
                    &#9776; {/* Hamburger icon */}
                </button>
                <h1>Weekly Timetable</h1>
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                </button>
            </header>

            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Days Carousel */}
            <DaysCarousel selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

            {/* Task Form */}
            <TaskForm addTask={addTask} />

            {/* Task List */}
            <TaskList tasks={tasks} selectedDay={selectedDay} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
