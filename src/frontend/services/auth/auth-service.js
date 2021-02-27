import axios from "axios";

class AuthService {
  login(username, password) {
    return axios
      .post("/api/auth/signin", { username,  password })
      .then((response) => {

        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  

}