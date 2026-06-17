import { createContext , useState, useContext} from "react";

const AuthenticationContext= createContext();

export default function AuthenticationProvider({ children }) {
  const allEntrys = JSON.parse(localStorage.getItem('auth')) || [];
  const [entrys, setEntrys] = useState(allEntrys);

  const addToken = (token) => {
    
      const updatedEntrys = [token,...entrys];
      localStorage.setItem('allentrys', JSON.stringify(updatedEntrys));
      setEntrys(JSON.parse(localStorage.getItem('allentrys')) || []);
    
  };

  const deleteToken = (token) => {
    
      localStorage.setItem('allentrys', JSON.stringify([]));
      setEntrys(JSON.parse(localStorage.getItem('allentrys')) || []);
    
  };

  const getToken = () => {
    return entrys.length > 0 ? entrys[0] : null;
  };

  return (
    <AuthenticationContext.Provider value={{getToken, addToken, deleteToken}}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useEntry() {
  return useContext(AuthenticationContext);
}