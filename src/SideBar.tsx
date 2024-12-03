// import React from "react";


import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {

    // const currDate = new Date().getUTCDate();
    // const currTime = new Date();

    return(
        <div className={isOpen ? 'sidebar open' : 'sidebar'}>
            <button className="close-btn" onClick={toggleSidebar}>
                &times;</button>






                {/*<p> Current Date is = {currDate} </p>*/}
                {/*<p> Current Time is = {currTime} </p>*/}

            <nav>
                <ul>
                <li><a href="#">Home</a></li>
                    <li><a href="./Timetable.tsx">Timetable</a></li>
                    <li><a href="./Notes.tsx">Notes</a></li>
                    <li><a href="#">About Me</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;

