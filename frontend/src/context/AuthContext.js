import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  async function signup(email, password) {
    const response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      const authToken = data.token;
      setIsLoggedIn(true);
      setUser({ email });
      localStorage.setItem("authToken", authToken);
      alert(data.message);
    } else {
      alert(data.message);
    }
  }

  async function login(email, password) {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      const authToken = data.token;
      setIsLoggedIn(true);
      setUser({ email });
      localStorage.setItem("authToken", authToken);
      console.log("You are logged in. Welcome back!");
      alert("You are logged in. Welcome back!");
    } else {
      alert(data.message);
    }
  }

  function logout() {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("authToken");
    alert("You are logged out. See you soon!");
  }

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
      setUser({ email: "TODO" });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
        signup,
      }}
      {...props}
    />
  );
}
