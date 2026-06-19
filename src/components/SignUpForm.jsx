import { useState } from 'react';

const initialState = { email: '',
    password: '', };
const SignUpForm = () => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
       
    e.preventDefault();
    try{
        const email = form.email; 
        const password = form.password; 

    if(!email )throw new Error("Email should not be blank ");
    if(!password )throw new Error("Password should not be blank ");
     
    const callApi=   async () => { 
        try{
          const rawResponse = await fetch('http://localhost:3001/api/users', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
          //console.log(rawResponse);

          const content = await rawResponse.json();
            //console.log(content);
          if(content.error) {
            console.log(error);
            setError("Signup failed!"+content.error);
          }else{
            setForm(initialState);
            window.location.href = '/login';
          }
        }catch(error){
          console.log(error);
          setError("Signup failed!"+error);
        }
    };
     callApi()
        
    }catch(error){
      console.log(error);
      setError("Signup failed!"+error);    
    }      
    };
  

  return (
        
    <div className="bg-blue-200 p-6   mx-auto">
      <h3 className="text-xl font-bold">Registration Form</h3>

      <div className="">
        <form
          onSubmit={handleSubmit}
          className=" border-2 p-4 rounded-sm"
        >
        <label className="block text-sm font-medium text-gray-700">
          Email*
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </label>
        <br/>
        <label className="block text-sm font-medium text-gray-700">
          Password*
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </label>
        
        <br/>
        <div className="flex w-full justify-items-end">
          <button name="submit"
            type="submit"
            className="w-[80px] py-2 bg-blue-800 text-white rounded hover:bg-pink-700"
          >
            Submit
          </button>
        </div>
        
        </form>
      </div>
      <div className="text-red-500 mt-2">
        {error && <p>{error}</p>} 
      </div>
      </div>
    );
};

export default SignUpForm;