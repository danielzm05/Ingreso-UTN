import { useEffect, useState, createContext, useContext } from "react";
import { supabase } from "../backend/client";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userEvent, setUserEvent] = useState(null);
  const navigate = useNavigate();

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    console.log("log out");
  };

  const signUp = async (nombre, email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: nombre,
        },
      },
    });

    if (error) throw error;
    navigate("/examenes");
  };

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      toast.error("Usuario o contraseña incorrectas");
    }
    navigate("/dashboard");
  };

  const getUserInfo = async (userId = user.id) => {
    if (userId) {
      const { data, error } = await supabase.from("usuario").select("*, usuario_rol (*)").eq("id_usuario", userId);

      if (error) throw error;
      setUserInfo(data[0]);
    }
  };

  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();
    console.log(data);
    if (data.user) {
      setUser(data.user);
      getUserInfo(data.user.id);
    } else {
      navigate("/", { replace: true });
      setUser(null);
      setUserInfo(null);
    }
  };

  useEffect(() => {
    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUserEvent(event);
      checkUser();
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ user, userInfo, userEvent, getUserInfo, logOut, signUp, signIn }}>{children}</AuthContext.Provider>;
};
