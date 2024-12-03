


function DaysCarousel({ selectedDay, setSelectedDay }) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return (
        <div className="carousel">
            {days.map((day) => (
                <div
                    key={day}
                    className={`day ${day === selectedDay ? "active" : ""}`}
                    onClick={() => setSelectedDay(day)}
                >
                    {day}
                </div>
            ))}
        </div>
    );
}

export default DaysCarousel;


