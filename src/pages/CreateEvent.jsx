import { useState } from 'react';
import { useAuthenticationContext } from '../context/AuthenticationContext';

const CreateEvent = () => {
  //const { token } = useAuthenticationContext();
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    location: '',
    latitude: '',
    longitude: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log('Token: ', token);
    //console.log('formData: ', formData);
    const token=JSON.parse(localStorage.getItem('token')) || '';
    if(token){
        const response = await fetch('http://localhost:3001/api/events/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }).catch((err) => {
          console.error('Error creating event details:', err);
          setError('Error creating event , check console log for more details...');
        });

        if (response.ok) {
          alert('Event created successfully!');
          setError(null);
        } else {
          //alert('Failed to create your event.');
          setError('Error creating event , check console log for more details...');
        }
    }else{
      window.location.href = '/login';
    }   
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl font-bold text-primary">
            Create New Event
          </h2>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Event Title"
              className="input input-bordered w-full"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <input
              type="date"
              className="input input-bordered w-full"
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Location"
              className="input input-bordered w-full"
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Latitude"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setFormData({ ...formData, latitude: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Longitude"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setFormData({ ...formData, longitude: e.target.value })
                }
              />
            </div>

            <textarea
              placeholder="Description"
              rows={5}
              className="textarea textarea-bordered w-full"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />

            <button
              type="submit"
              className="btn btn-primary btn-block md:btn-wide mx-auto flex"
            >
              Submit Event
            </button>
          </form>

          {error && (
            <div className="alert alert-error mt-4">
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CreateEvent;
