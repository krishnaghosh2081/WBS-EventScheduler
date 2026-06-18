import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
    return (
        <Link to={`/events/${event.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="p-4 border rounded shadow">
                <h2 className="text-xl font-semibold">{event.title}</h2>
                <p>{event.date}</p>
            </div>
        </Link>
    );
};

export default EventCard;
