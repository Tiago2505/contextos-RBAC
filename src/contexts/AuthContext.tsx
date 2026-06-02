import { createContext, useContext, useState } from "react";

type Role = "user" | "admin";

interface AuthContextInterface {
  role: Role;

  setRole: (role: Role) => void;

  logout: (navigation: any) => void;
}

const AuthContext = createContext<AuthContextInterface | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error();

  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<Role>("user");

  const logout = (navigation: any) => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <AuthContext.Provider value={{ role, setRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
