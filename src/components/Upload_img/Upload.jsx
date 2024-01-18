

import "./upload.css";
import axios from "../axios/Axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Upload = () => {
  const [stateUpload, setStateUpload] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setStateUpload(file);
  };

  const handleUpload = async () => {
   
    if (stateUpload) {
      try {
        const formData = new FormData();
        formData.append("image", stateUpload);

        const response = await axios.post("/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("imagen subida correctamente", response.data);
      } catch (error) {
        console.error("Error al subir la imagen:", error);
      }
    } else {
      console.warn("Selecciona una imagen antes de subirla.");
    }
  
  };

  return (
    <div className="upload-container">
      <label htmlFor="file-upload" className="upload-label">
        <FontAwesomeIcon icon={faUpload} className="upload-icon" />
        Cargar Imagen
      </label>
      <input
        onChange={handleChange}
        type="file"
        id="file-upload"
        className="upload-input"
        name="image"
      />
      <button onClick={handleUpload}>Subir imagen</button>
    </div>
  );
};

export default Upload;
