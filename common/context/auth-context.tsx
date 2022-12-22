import React, { useState } from 'react';

interface IAuthContextProps {
  user: any;
  loading: boolean;
  setUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
}

export const AuthContext = React.createContext<IAuthContextProps>({
  user: {},
  loading: true,
  setUser: () => {},
  setLoading: () => {},
});

export const AuthContextProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        loading: isLoading,
        setUser: setCurrentUser,
        setLoading: setIsLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
