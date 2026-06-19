import { Link } from 'react-router';

const EventCard = ({ event }) => {
  return (
    <Link
      to={`/events/${event.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{event.title}</h2>
          <p>{event.location}</p>
          <div className="card-actions justify-end">
            <span>
              {new Date(event.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
