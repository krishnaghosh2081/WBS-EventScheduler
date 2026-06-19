import { useAuthenticationContext } from '../context/AuthenticationContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const EventDetails = () => {
  // const { token } = useAuthenticationContext();
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      })
      .catch((err) => console.error(err));
  }, [id]);
  if (!event) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      Event details for ID: {id}
      <h1>{event.title}</h1>
      <p>
        {' '}
        {new Date(event.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>
        <iframe
          title="event-location"
          className="w-107 h-80 rounded-lg border"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${event.latitude},${event.longitude}&z=15&output=embed`}
        />
      </p>
      <p>
        Event was created at:{' '}
        {new Date(event.createdAt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <p>
        Last updated:{' '}
        {new Date(event.updatedAt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
    </div>
  );
};
export default EventDetails;
