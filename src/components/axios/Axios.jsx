

import axios from 'axios'


axios.defaults.baseURL = "http://localhost:3001"




// En este código, estamos configurando un interceptor de 
// solicitudes que se ejecutará antes de cada solicitud. 
// Verifica si hay un token almacenado en el localStorage y, 
// en caso afirmativo, lo incluye en las cabeceras de la 
// solicitud como un encabezado de autorización.

// Ahora, cada vez que hagas una solicitud usando axios, 
// se incluirá automáticamente el token en las cabeceras.

// Interceptor de solicitudes
axios.interceptors.request.use(
    (config) => {

    
      const token = localStorage.getItem("token");
  
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default axios;