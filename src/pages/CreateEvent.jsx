import  {useAuthenticationContext}  from '../context/AuthenticationContext';

const CreateEvent = () => {
  const { token} = useAuthenticationContext();
  return (
    <div > Create event from here
    </div>
  );
};

export default CreateEvent;
