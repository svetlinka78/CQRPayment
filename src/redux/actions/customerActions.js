import { urlsCustomer } from "../../services/serviceUrls";
import config from "config";
import * as repositoryActions from "./repositoryActions";
import * as userUtils from "../../utils/userUtils";

const urlCustomer = `${config.apiUrl}/${urlsCustomer.customer}`;
const urlHistory = `${config.apiUrl}/${urlsCustomer.customer}/${urlsCustomer.history}`;
const header = {
  headers: userUtils.authHeader(),
};

export const actGetCustomerData = (props) => {
  return repositoryActions.getData(urlCustomer, header, props);
};

export const actGetCustomerDataById = (id, props) => {
  return repositoryActions.getData(urlCustomer + "/" + id, header, props);
};

export const actPostCustomerData = (obj, props) => {
  return repositoryActions.postData(urlCustomer, header, obj, props);
};

export const actPutCustomerData = (obj, props) => {
  return repositoryActions.putData(urlCustomer, header, obj, props);
};

export const actDeleteCustomerData = (id, props) => {
  return repositoryActions.deleteData(urlCustomer + "/" + id, config, props);
};

export const actCustomerCloseSuccessModal = (url, props) => {
  return repositoryActions.closeSuccessModal(url, props);
};

export const actGetCustomerHistoryDataById = (id, props) => {
  return repositoryActions.getData(urlHistory + "/" + id, props);
};
