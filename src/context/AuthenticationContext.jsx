import { createContext , useState, useContext} from "react";

const AuthenticationContext= createContext();

export default function AuthenticationProvider({ children }) {
  const allEntrys = JSON.parse(localStorage.getItem('allentrys')) || [];
  const [entrys, setEntrys] = useState(allEntrys);
  const[token, setToken] = useState(entrys.length > 0 ? entrys[0] : null);

  const addToken = (tokenEntry) => {
    
      const updatedEntrys = [tokenEntry,...entrys];
      localStorage.setItem('allentrys', JSON.stringify(updatedEntrys));
      setEntrys(JSON.parse(localStorage.getItem('allentrys')) || []);
    setToken(getToken());
  };

  const deleteToken = () => {
    
      localStorage.setItem('allentrys', JSON.stringify([]));
      setEntrys(JSON.parse(localStorage.getItem('allentrys')) || []);
    setToken(getToken());
  };

  const getToken = () => {
    return entrys.length > 0 ? entrys[0] : null;
  };

  return (
    <AuthenticationContext.Provider value={{token, addToken, deleteToken}}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthenticationContext() {
  return useContext(AuthenticationContext);
}