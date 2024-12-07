import Cookies from 'js-cookie';

export const isAuthenticated = () => {
    const token = Cookies.get('usr-tkn-my-fls');
    // console.log('Token from cookies:', token);
    // console.log(document.cookie);
  
    return !!token; // Returns true if the token exists, otherwise false
  };