import axios from "axios";
const baseUrl = "http://localhost:3008/api/mascotas";

export const getAllM = async () => {
  const mascotas = axios.get(`${baseUrl}/`);
  return mascotas.then((response) => response.data);
};
