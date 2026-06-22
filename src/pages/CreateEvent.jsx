import { useState } from 'react';
import  {useAuthenticationContext}  from '../context/AuthenticationContext';

const CreateEvent = () => {
  const { token} = useAuthenticationContext();
  const [formData, setFormData] = useState({title: '', date: '', description: '',location: '',latitude: '', longitude: ''});
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    console.log("Token: ",token);
    console.log("formData: ",formData);
    const response = await fetch('http://localhost:3001/api/events/', {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      console.error("Error creating event details:", err);
      setError("Error creating event , check console log for more details...");
    });

    if (response.ok) {
      alert('Event created successfully!');
      setError(null);
    } else {
      //alert('Failed to create your event.');
      setError("Error creating event , check console log for more details...");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Create New Event</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input 
          type="text" 
          placeholder="Event Title" 
          className="block border p-2 mb-2 w-full"
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <input 
          type="date" 
          className="block border p-2 mb-2 w-full"
          onChange={(e) => setFormData({...formData, date: e.target.value})}
        />
        <input
  type="text"
  placeholder="Location"
  className="block border p-2 mb-2 w-full"
  onChange={(e) => setFormData({...formData, location: e.target.value})}
/>
<input
  type="text"
  placeholder="Latitude"
  className="block border p-2 mb-2 w-full"
  onChange={(e) => setFormData({...formData, latitude: e.target.value})}
/>
<input
  type="text"
  placeholder="Longitude"
  className="block border p-2 mb-2 w-full"
  onChange={(e) => setFormData({...formData, longitude: e.target.value})}
/>
        <textarea 
          placeholder="Description" 
          className="block border p-2 mb-2 w-full"
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit Event
        </button>
      </form>
      <div className="text-red-500 mt-2">
        {error && <p>{error}</p>} 
    </div>
    </div>
    
  );
};
export default CreateEvent;
