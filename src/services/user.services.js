import axios from "axios";
const baseUrl = `${process.env.REACT_APP_BASE_URL}api/users`;

export const create = async (objCredentiales) => {
  const data = await axios.post(`${baseUrl}`, objCredentiales);
  console.log(data);
  return data;
};
export const login = async (objCredentiales) => {
  const data = await axios.post(`${baseUrl}/login`, objCredentiales);
  return data;
};
