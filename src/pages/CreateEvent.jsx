import { useState } from 'react';
import  {useAuthenticationContext}  from '../context/AuthenticationContext';

const CreateEvent = () => {
  const { token} = useAuthenticationContext();
  const [formData, setFormData] = useState({title: '', date: '', description: '',location: 'Frankfurt',latitude: '8.404746955649602', longitude: '49.01438194665317'});

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
    });

    if (response.ok) {
      alert('Event created successfully!');
    } else {
      alert('Failed to create your event.');
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
        <textarea 
          placeholder="Description" 
          className="block border p-2 mb-2 w-full"
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit Event
        </button>
      </form>
    </div>
  );
};
export default CreateEvent;
