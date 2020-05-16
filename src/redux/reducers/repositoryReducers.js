import { actionTypes } from "../constants/actionTypes";

const initialState = {
  data: null,
  showSuccessModal: false,
};

const rdcGetDataSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    //data: [...state.data]
  };
};

const rdcPostDataSuccess = (state, action) => {
  return {
    ...state,
    showSuccessModal: true,
  };
};

const rdcPutDataSuccess = (state, action) => {
  return {
    ...state,
    showSuccessModal: true,
  };
};

const rdcDeleteDataSuccess = (state, action) => {
  return {
    ...state,
    showSuccessModal: true,
  };
};

// called in the page MapDispatchToProps to change data from user interface -  the user changed some field
const rdcCloseSuccessModal = (state, action) => {
  action.props.history.push(action.url);
  return {
    ...state,
    showSuccessModal: false,
  };
};

//called from the action in service  when to take data from service
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_SUCCESS:
      return rdcGetDataSuccess(state, action);
    case actionTypes.POST_DATA_SUCCESS:
      return rdcPostDataSuccess(state, action);
    case actionTypes.PUT_DATA_SUCCESS:
      return rdcPutDataSuccess(state, action);
    case actionTypes.DELETE_DATA_SUCCESS:
      return rdcDeleteDataSuccess(state, action);
    // case actionTypes.GET_HISTORY_DATA_SUCCESS:
    //   return rdcGetHistoryDataSuccess(state, action);
    case actionTypes.CLOSE_SUCCESS_MODAL:
      return rdcCloseSuccessModal(state, action);
    default:
      return state;
  }
};

export default reducer;
