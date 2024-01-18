

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Upload from "../Upload_img/Upload";
import obtenerImage from "../rutasUpdate/GetImage";
export const Home = () => {
  const [posts, setPots] = useState("");
  const [token, setToken] = useState(null);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica la existencia del token al cargar el componente
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await obtenerImage();
        console.log(response);
        setImages(response);
        
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleSumbmit = (e) => {
    e.preventDefault();
  };

  const handleLogout = () => {
    // Elimina el token del estado y localStorage
    setToken(null);
    localStorage.removeItem("token");
    // Redirige al usuario a la página de inicio de sesión
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleSumbmit}>
        <label>postea un algo</label>
        <input
          type="text"
          value={posts}
          onChange={(e) => setPots(e.target.value)}
        />
        <button>post</button>
      </form>

      <div>
        <button onClick={handleLogout}>cerrar sesion</button>
      </div>
      <Upload />
      <div className="containerImg">
      {images.map((image) => (
          <img
            key={image._id}
            src={`http://localhost:3001/images/${image.filename}`}
            alt={image.filename}
  />
))}
</div>
    </div>
  );
};
