import { actionTypes } from "../constants/actionTypes";

const act404Handler = (props) => {
  return {
    type: actionTypes.HTTP_404_ERROR,
    props: props,
  };
};
const act500Handler = (props) => {
  return {
    type: actionTypes.HTTP_500_ERROR,
    props: props,
  };
};

const act401Handler = (props) => {
  return {
    type: actionTypes.HTTP_401_ERROR,
    props: props,
  };
};

const act403Handler = (props) => {
  return {
    type: actionTypes.HTTP_403_ERROR,
    props: props,
  };
};

const actOtherErrorHandler = (error) => {
  return {
    type: actionTypes.HTTP_OTHER_ERROR,
    error: error,
  };
};

export const actCloseErrorModal = () => {
  return {
    type: actionTypes.CLOSE_ERROR_MODAL,
  };
};

export const handleHTTPError = (error, props) => {
  if (error.response.status === 404) {
    return act404Handler(props);
  } else if (error.response.status === 500) {
    return act500Handler(props);
  } else if (error.response.status === 401) {
    return act401Handler(props);
  } else if (error.response.status === 403) {
    return act403Handler(props);
  } else {
    return actOtherErrorHandler(error);
  }
};
