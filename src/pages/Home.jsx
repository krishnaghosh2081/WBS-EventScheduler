import {useState, useEffect } from 'react';

const Home = () => {
    const [events, setEvents] = useState([]);
useEffect(() => {
    fetch('http://localhost:3001/api/events')
    .then((res) => res.json())
    .then((data) => {

        const sortedEvents = data.results.sort((a,b) => new Date(a.date) - new Date(b.date));
        setEvents(sortedEvents);
    })
    .catch((err) => console.error("Error fetching events:", err));
    }, []);

    console.log("Current state of events:", events);
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
            <div className="grid gap-4">
                {events.map((event) => (
                    <div key={event.id} className="p-4 border rounded shadow">
                        <h2 className="text-xl font-semibold">{event.title}</h2>
                        <p>{event.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;