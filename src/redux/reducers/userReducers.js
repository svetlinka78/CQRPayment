import { userActionTypes } from "../../redux/constants/userActionTypes";

const initialState = {
  data: null,
  showSuccessModal: false,
};

const rdcPostDataSuccess = (state, action) => {
  return {
    ...state,
    showSuccessModal: true,
  };
};

const rdcPostLoginDataSuccess = (state, action) => {
  return {
    ...state,
    showSuccessModal: true,
  };
};

const rdcCloseSuccessModal = (state, action) => {
  action.props.history.push(action.url);
  return {
    ...state,
    showSuccessModal: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.REGISTER_SUCCESS:
      return rdcPostDataSuccess(state, action);
    case userActionTypes.LOGIN_SUCCESS:
      return rdcPostLoginDataSuccess(state, action);
    case userActionTypes.CLOSE_SUCCESS_MODAL:
      return rdcCloseSuccessModal(state, action);
    default:
      return state;
  }
};

export default reducer;
