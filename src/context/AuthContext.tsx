import {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import { clearStorage, setItem, storageKeys } from "../utils";

type User = {
  uid: string;
  username: string;
  email: string;
};

type AuthDataType = {
  user: User | null;
  handleAuth: (user: User) => void;
  logout: () => void;
};

const initialData: AuthDataType = {
  user: null,
  handleAuth: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthDataType>(initialData);
const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const handleAuth = (user: User) => {
    setUser(user);
    setItem(storageKeys.USER, user);
  };

  const logout = () => {
    setUser(null);
    clearStorage;
  };

  return (
    <AuthContext.Provider value={{ user, handleAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { type User, type AuthDataType, AuthProvider, AuthContext };
