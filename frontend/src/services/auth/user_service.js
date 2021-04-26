import axios from 'axios';
import authHeader from './auth_header';

const API_URL = `http://localhost:8080`;

class UserService {

  // /api/test/all
  getPublicContent() {
    return axios.get(`${API_URL}/api/test/all`);
  }

  // /api/test/user
  getUserBoard() {
    return axios.get(`${API_URL}/api/test/user`, { headers: authHeader() });
  }

  // /api/test/mod
  getModeratorBoard() {
    return axios.get(`${API_URL}/api/test/mod`, { headers: authHeader() });
  }

  // /api/test/admin
  getAdminBoard() {
    return axios.get(`${API_URL}/api/test/admin`, { headers: authHeader() });
  }
}

export default new UserService();