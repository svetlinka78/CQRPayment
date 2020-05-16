import axios from "../../services/axios";
import { actionTypes } from "../../redux/constants/actionTypes";
import * as errorHandlerActions from "../actions/errorHandlerActions";

//----Get-----
export const getData = (url, header, props) => {
  return (dispatch) => {
    axios
      .get(url, header)
      .then((response) => {
        dispatch(success(response.data.data));
      })
      .catch((error) => {
        dispatch(errorHandlerActions.handleHTTPError(error, props));
      });
  };

  function success(data) {
    return {
      type: actionTypes.GET_DATA_SUCCESS,
      data: data, //Object.entries(data),//convert json data to array
    };
  }
};

//----POST-----
export const postData = (url, header, obj, props) => {
  return (dispatch) => {
    axios
      .post(url, obj, header)
      .then((response) => {
        dispatch(success(response));
      })
      .catch((error) => {
        dispatch(errorHandlerActions.handleHTTPError(error, props));
      });
  };

  function success(response) {
    return {
      type: actionTypes.POST_DATA_SUCCESS,
      response: response,
    };
  }
};

export const putData = (url, header, obj, props) => {
  return (dispatch) => {
    axios
      .put(url, obj, header)
      .then((response) => {
        dispatch(success(response));
      })
      .catch((error) => {
        dispatch(errorHandlerActions.handleHTTPError(error, props));
      });
  };

  function success(response) {
    return {
      type: actionTypes.POST_DATA_SUCCESS,
      response: response,
    };
  }
};

export const deleteData = (url, header, props) => {
  return (dispatch) => {
    axios
      .delete(url, header)
      .then((response) => {
        dispatch(success(response));
      })
      .catch((error) => {
        dispatch(errorHandlerActions.handleHTTPError(error, props));
      });
  };

  function success(response) {
    return {
      type: actionTypes.DELETE_DATA_SUCCESS,
      response: response,
    };
  }
};

export const closeSuccessModal = (url, props) => {
  return {
    type: actionTypes.CLOSE_SUCCESS_MODAL,
    props: props,
    url: url,
  };
};
