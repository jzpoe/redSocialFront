

import axios from '../axios/Axios';


const obtenerImage = async () => {
    try {
        const response = await axios.get('/images');
        console.log('Respuesta del servidor:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el objeto:', error);
        throw error; // Propaga el error para que pueda ser capturado en el componente que llama a esta función.
    }
}





export default obtenerImage
