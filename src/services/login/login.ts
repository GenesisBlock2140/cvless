import axios from "axios";

const baseUrl = "/api/users/login";

const login = async (email: string, password: string) => {
  const response = await axios.post(baseUrl, {
    email,
    password,
  });
  return response.data;
};

export default login;
