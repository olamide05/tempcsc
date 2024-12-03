


function Notes()  {
    return (
        <div className="notes">

            <h2>Notes</h2>
            <p>This is where your notes will go.</p>
            <section className="recent-notes">
                <h2>Recently Accessed Notes</h2>
                <ul>
                    <li>Note 1</li>
                    <li>Note 2</li>
                    <li>Note 3</li>
                </ul>
            </section>
            <section className="add-module">
                <button onClick={() => console.log('Add Module Clicked')}>
                    Add Module
                </button>
            </section>

        </div>


    );
}

export default Notes;