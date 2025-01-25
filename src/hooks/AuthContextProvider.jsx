import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();
const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("visaUser");
    if (storedData) {
      setAuthUser(JSON.parse(storedData));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
