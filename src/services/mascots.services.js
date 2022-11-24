import axios from "axios";
const baseUrl = `${process.env.REACT_APP_BASE_URL}api/mascotas`;

export const getAllM = async () => {
  const mascotas = axios.get(`${baseUrl}/`);
  return mascotas.then((response) => response.data);
};
