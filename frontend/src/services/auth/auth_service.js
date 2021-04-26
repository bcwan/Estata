import axios from "axios";

const API_URL = `http://localhost:8080`;

// uses Axios for HTTP requests and local storage to store user info and JWT token
class AuthService {
  // /api/auth/signin
  login(username, password) {
    return axios
      .post(`${API_URL}/api/auth/signin`, { username,  password })
      .then((response) => {

        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  // /api/auth/signup
  register(username, email, password) {
    return axios.post(`${API_URL}/api/auth/signup`, {
      username,
      email,
      password,
    });
  }

}

export default new AuthService();