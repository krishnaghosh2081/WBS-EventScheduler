import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
useEffect(() => {
    fetch('http://localhost:3001/api/events')
    .then((res) => res.json())
    .then((data) => {

        const sortedEvents = data.results.sort((a,b) => new Date(a.date) - new Date(b.date));
        setEvents(sortedEvents);
        setError(null);
    })
    .catch((err) => {
      console.error("Error fetching events:", err);
      setError("Error fetching events , check console log for more details...");
    });
    }, []);

    //console.log("Current state of events:", events);
    return (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,30rem)]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
    <div className="text-red-500 mt-2">
        {error && <p>{error}</p>} 
    </div>
  </div>
  
);
};

export default Home;