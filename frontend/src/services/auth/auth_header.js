// Retrieve data from server, and checks local storage for user item
// If user logged in has JWT access token, return HTTP auth header
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}