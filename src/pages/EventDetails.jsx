import  {useAuthenticationContext}  from '../context/AuthenticationContext';
import { useParams } from "react-router";

const EventDetails = () => {
  const { token} = useAuthenticationContext();
  const { id } = useParams();
  return (
    <div > Event details for ID: {id}
    </div>
  );
};

export default EventDetails;
