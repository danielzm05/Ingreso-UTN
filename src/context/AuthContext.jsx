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
    setUser(null);
  };

  const signUp = async (nombre, email, password) => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: nombre,
        },
      },
    });

    if (error) {
      toast.error("Hubo un error al registrarse. Intente nuevamente");
      throw error;
    }
    return { success: true, email: email };
  };

  const signIn = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      toast.error("Usuario o contraseña incorrectas");
      throw error;
    }
    navigate("/");
  };

  const updatePassword = async (new_password) => {
    const { error } = await supabase.auth.updateUser({
      password: new_password,
    });
    if (error) {
      toast.error("Error al cambiar la contraseña");
    } else {
      toast.success("Contraseña cambiada correctamente");
    }
  };

  const resetPasswordEmail = async (email) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://utn-ingreso.pro/update-password",
    });

    if (error) throw error;
    toast("Se ha enviado un email con las instrucciones para cambiar la contraseña", { icon: "📩", duration: 5000 });
  };

  async function signInWithGithub() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "https://utn-ingreso.pro/",
      },
    });
  }

  const getUserInfo = async (userId = user.id) => {
    if (userId) {
      const { data, error } = await supabase.from("usuario").select("*, usuario_rol (*)").eq("id_usuario", userId);

      if (error) throw error;
      setUserInfo(data[0]);
    }
  };

  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();
    if (data.user) {
      setUser(data.user);
      getUserInfo(data.user.id);
    } else {
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

  return (
    <AuthContext.Provider
      value={{ user, userInfo, userEvent, getUserInfo, logOut, signUp, signIn, signInWithGithub, updatePassword, resetPasswordEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};
