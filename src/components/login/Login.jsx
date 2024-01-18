
import "./login.css";
import { useState } from "react";
import axios from "../axios/Axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSumbmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post("/login",  {
        
        email,
        password,
      });

      const token = response.data.token;

      localStorage.setItem("token", token);

      navigate("/Home", {
        replace: true,
        state: {
          logged: true,
        },
      });

    } catch (error) {
      console.error("Error al iniciar sesion", error);
    }
  };

  return (
    <form onSubmit={handleSumbmit} className="formclass">
      <h3 className="session">Inicia sesion</h3>
      <label htmlFor="">ingresa tu correo</label>

      <input
        type="text"
        placeholder="correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="labelLogin">contraseña</label>
      <input className="inputLogin"
        type="text"
        placeholder="contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="botonLogin">Entrar</button>

      
    </form>

    
  );
};

export default Login;
