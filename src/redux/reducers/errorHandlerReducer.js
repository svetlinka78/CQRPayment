import { actionTypes } from "../../redux/constants/actionTypes";
import * as commonUtils from "../../utils/commonUtils";

const initialState = {
  showErrorModal: false,
  errorMessage: "",
};

const rdc404 = (state, action) => {
  action.props.history.push("/404");
  return { ...state };
};

const rdc500 = (state, action) => {
  action.props.history.push("/500");
  return { ...state };
};

const rdc401 = (state, action) => {
  action.props.history.push("/401");
  return { ...state };
};

const rdc403 = (state, action) => {
  action.props.history.push("/403");
  return { ...state };
};

const rdcOtherError = (state, action) => {
  let message = action.error.response.data.data
    ? commonUtils.convertArrayToString(action.error.response.data.data)
    : commonUtils.convertObjectToString(action.error.response.data.errors);
  return {
    ...state,
    showErrorModal: true,
    errorMessage: message,
  };
};

const rdcCloseErrorModal = (state, action) => {
  return {
    ...state,
    showErrorModal: false,
    errorMessage: "",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HTTP_404_ERROR:
      return rdc404(state, action);
    case actionTypes.HTTP_500_ERROR:
      return rdc500(state, action);
    case actionTypes.HTTP_401_ERROR:
      return rdc401(state, action);
    case actionTypes.HTTP_403_ERROR:
      return rdc403(state, action);
    case actionTypes.HTTP_OTHER_ERROR:
      return rdcOtherError(state, action);
    case actionTypes.CLOSE_ERROR_MODAL:
      return rdcCloseErrorModal(state, action);
    default:
      return state;
  }
};

export default reducer;
