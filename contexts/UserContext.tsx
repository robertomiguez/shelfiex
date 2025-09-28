import { createContext, useEffect, useState } from 'react';
import { account } from '../lib/appwrite';
import { ID } from 'react-native-appwrite';
import { User } from '../types/User';

interface UserContextType {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  authChecked: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [authChecked, setAuthChecked] = useState(false);

  async function login(email: string, password: string): Promise<void> {
    try {
      const userAccount = await account.createEmailPasswordSession(
        email,
        password
      );
      const userInfo = await account.get();
      setUser(userInfo);
    } catch (error) {
      throw Error(error instanceof Error ? error.message : String(error));
    }
  }

  async function register(email: string, password: string) {
    try {
      const userAccount = await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      throw Error(error instanceof Error ? error.message : String(error));
    }
  }

  async function logout() {
    await account.deleteSession('current');
    setUser(null);
  }

  async function fetchUser() {
    try {
      const userInfo = await account.get();
      setUser(userInfo);
    } catch (error) {
      setUser(null);
    } finally {
      setAuthChecked(true);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        authChecked,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
