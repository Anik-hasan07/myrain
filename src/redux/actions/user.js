import axios from 'axios';
export const login = (email, password) => async dispatch => {
    try {
      dispatch({ type: 'loginRequest' });
  
      const { data } = await axios.post(
        `https://microtaskbidz.cyclic.app/login`,
        { email, password },
        {
          headers: {
            'Content-type': 'application/json',
          },
  
          withCredentials: true,
        }
      );
  
      dispatch({ type: 'loginSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'loginFail', payload: error.response.data.message });
    }
  };

  export const register = formdata => async dispatch => {
    try {
      dispatch({ type: 'registerRequest' });
  
      const { data } = await axios.post(`https://microtaskbidz.cyclic.app/register`, formdata, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
  
        withCredentials: true,
      });
  
      dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'registerFail', payload: error.response.data.message });
    }
  };