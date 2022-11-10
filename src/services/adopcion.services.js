import axios from "axios";
const baseUrl = "http://localhost:3008/api/adopciones";

export const postAdoptar = async ({ registro }) => {
  console.log(registro);

  const mascotas = axios.post(`${baseUrl}/`, registro);
  return mascotas.then((response) => response.data);
};
