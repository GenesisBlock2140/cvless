import axios from "axios";

const baseUrl = "/api/users/signup";

const signup = async (email: string, password: string, username: string) => {
  const response = await axios.post(baseUrl, {
    email,
    password,
    username,
  });
  return response.data;
};

export default signup;
