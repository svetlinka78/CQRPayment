import { urlsUser } from "../../services/serviceUrls";
import config from "config";
import axios from "../../services/axios";
import { userActionTypes } from "../../redux/constants/userActionTypes";
import * as errorHandlerActions from "../actions/errorHandlerActions";

const urlAccount = `${config.apiUrl}/${urlsUser.account}`;
const urlRegister = `${urlAccount}/${urlsUser.register}`;
const urlLogin = `${urlAccount}/${urlsUser.login}`;

//----Login-----
export const login = (user, props) => {
  return (dispatch) => {
    axios
      .post(urlLogin, user)
      .then((response) => {
        store(user, response.data.data.result);
        dispatch(success(response));
      })
      .catch((error) => {
        dispatch(errorHandlerActions.handleHTTPError(error, props));
      });
  };

  function success(response) {
    return {
      type: userActionTypes.LOGIN_SUCCESS,
      response: response,
    };
  }

  function store(user, result) {
    const store = {
      email: user.email,
      token: result,
    };
    localStorage.setItem("user", JSON.stringify(store));
  }
};
//--------------Register------
export const register = (user, props) => {
  return (dispatch) => {
    axios
      .post(urlRegister, user)
      .then((response) => {
        store(user, response.data.data.result);
        dispatch(success(response));
      })
      .catch((error) => {
        dispatch(errorHandlerActions.handleHTTPError(error, props));
      });
  };

  function success(response) {
    return {
      type: userActionTypes.REGISTER_SUCCESS,
      response: response,
    };
  }

  function store(user, result) {
    const store = {
      email: user.email,
      token: result,
    };
    localStorage.setItem("user", JSON.stringify(store));
  }
};

export const closeSuccessModal = (url, props) => {
  return {
    type: userActionTypes.CLOSE_SUCCESS_MODAL,
    props: props,
    url: url,
  };
};
