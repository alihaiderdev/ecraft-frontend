import axios from "axios";
import { authConstants } from "./authConstants";

export const signup =
  ({ name, email, password, passwordConfirm, role }) =>
  async (dispatch) => {
    try {
      var {
        data: {
          data: { user } = {},
        },
      } = await axios.post(`/auth/signup`, { username: name, email, password, passwordConfirm, role  });
      dispatch({
        type: authConstants.SET_USER,
        payload: {
          user
        }
      })
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      var {data: {data: {user}}} = await axios.post(`/auth/login`, { email, password });
      dispatch({
        type: authConstants.SET_USER,
        payload: {
          user
        }
      })
    } catch (error) {
      console.log(error);
    }
  };

  export const logout = () => async (dispatch) => {
    dispatch({
      type: authConstants.REMOVE_USER,
    })
  }
