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
      <p>{event.date}</p>
      <p>{event.description}</p>
      <p>{event.location}</p>
    </div>
  );
};
export default EventDetails;
