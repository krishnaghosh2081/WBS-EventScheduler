import { useAuthenticationContext } from '../context/AuthenticationContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const EventDetails = () => {
  const { token } = useAuthenticationContext();
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState(null);

  useEffect(() => {
if (event) setEditFormData(event);
  }, [event]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setError(null);
      })
      .catch((err) => {
      console.error("Error fetching event details:", err);
      setError("Error fetching event details , check console log for more details...");
    });
  }, [id]);

  if(error){
    return <div className="text-red-500 mt-2">
        {error && <p>{error}</p>} 
    </div>
  }
  
  if (!event) {
    return <p>Loading....</p>;
  }
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      const response = await fetch(`http://localhost:3001/api/events/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      });

      if (response.ok) {
        alert("Event deleted successfully!");
        window.location.href = '/'; 
      } else {
        const errorData = await response.json(); 
        console.error("Delete failed:", errorData);
        alert("Failed to delete event.");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      setError("Error deleting event , check console log for more details...");
    }
  };
  const handleUpdate = async () => {
  // Create a clean object with only the fields you want to update
  const payload = {
    title: editFormData.title,
    description: editFormData.description,
  };

  try {
    const response = await fetch(`http://localhost:3001/api/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload) // Send the cleaned object
    });

      if (response.ok) {
        alert("Event updated successfully!");
        setIsEditing(false);
        window.location.reload(); // Refresh the page to see changes
      } else {
        const errorData = await response.json();
        console.error("Update failed:", errorData);
        alert("Failed to update event.");
      }
    } catch (error) {
      console.error("Error updating event:", error);
      setError("Error updating event, check console log for more details...");
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl max-w-4xl mx-auto">
      <div className="card-body">
        {/* Title */}
        <h1 className="card-title text-3xl md:text-4xl">{event.title}</h1>

      {isEditing ? (
  <div className="space-y-4">
    <input 
      value={editFormData.title} 
      onChange={(e) => setEditFormData({...editFormData, title: e.target.value})} 
      className="input input-bordered w-full"
    />
    <textarea 
      value={editFormData.description} 
      onChange={(e) => setEditFormData({...editFormData, description: e.target.value})} 
      className="textarea textarea-bordered w-full"
    />
    <button onClick={handleUpdate} className="btn btn-success text-white">Save Changes</button>
    <button onClick={() => setIsEditing(false)} className="btn btn-ghost">Cancel</button>
  </div>
) : (
  <div>
    <p className="text-base-content/80 leading-relaxed mt-2">{event.description}</p>
    <button onClick={() => setIsEditing(true)} className="btn btn-outline mt-4">Edit Event</button>
  </div>
)}

        <div className="divider"></div>

        {/* Location */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Location</h2>
          <p>{event.location}</p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-box border border-base-300">
          <iframe
            title="event-location"
            className="w-full h-80"
            loading="lazy"
            src={`https://maps.google.com/maps?q=${event.latitude},${event.longitude}&z=15&output=embed`}
          />
        </div>

        <div className="divider"></div>

        {/* Metadata */}
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Created</div>
            <div className="stat-value text-lg">
              {new Date(event.createdAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Updated</div>
            <div className="stat-value text-lg">
              {new Date(event.updatedAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
        <button 
          onClick={handleDelete} 
          className="btn btn-error text-white"
        >
          Delete Event
        </button>
      </div>
      </div>
    </div>
  );
};
export default EventDetails;
