import axios from "axios";
const baseUrl = `${process.env.REACT_APP_BASE_URL}api/mascotas`;

export const getAllM = async () => {
  const mascotas = axios.get(`${baseUrl}/`);
  return mascotas.then((response) => response.data);
};
export const postMascota = ({data}) => {
  const mascota = axios.post("http://localhost:3008/api/mascotas", data)
     return mascota.then((res) => handelUrl(res.data))
      .catch((err) => console.log(err));
}