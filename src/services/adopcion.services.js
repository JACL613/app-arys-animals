import axios from "axios";
const baseUrl = `${process.env.REACT_APP_BASE_URL}api/adopciones`;

export let token = undefined;
export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};
export const postAdoptar = async ({ registro }) => {
  console.log(registro);

  const mascotas = axios.post(`${baseUrl}/`, registro);
  return mascotas.then((response) => response.data);
};
export const getAllAdop = async () => {
  const adopciones = axios.get(`${baseUrl}/`);
  return adopciones.then((response) => response.data);
};
export const putConfirm = async (Object) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  console.log(config);
  const adopcionUp = { ...Object };
  console.log(adopcionUp);
  const request = axios.put(`${baseUrl}/${Object.id}`, adopcionUp, config);
  console.log(request);

  return request.then((response) => response.data);
};
export const deleteAdop = async (Object) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  console.log(Object);

  const { id, idMascota } = Object;

  const request = axios.post(`${baseUrl}/delete/${id}`, { idMascota }, config);

  return request.then((response) => response.data);
};
