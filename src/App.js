import React, { Component } from "react";
//import { Router, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { connect } from "react-redux";
import Layout from "../src/components/elements/Layout/Layout";
import HomePage from "../src/components/elements/HomePage/HomePage";
import CustomerListPage from "../src/components/containers/Cusomer/CustomerListPage/CustomerListPage";
import CustomerDetails from "../src/components/elements/Customer/CustomerDetails/CustomerDetails";
import CreateCusomterModal from "../src/components/containers/Cusomer/CreateCustomerModal/CreateCusomterModal";
import UpdateCustomerModal from "../src/components/containers/Cusomer/UpdateCustomerModal/UpdateCustomerModal";
import DeleteCustomerModal from "../src/components/containers/Cusomer/DeleteCustomerModal/DeleteCustomerModal";
import HistoryCustomerModal from "./components/containers/Cusomer/HistoryCustomerModal/HistoryCustomerModal";
import RegisterPage from "./components/containers/User/RegisterPage/RegisterPage";
import LoginPage from "./components/containers/User/LoginPage/LoginPage";

import InternalServerError from "../src/components/elements/ErrorPages/InternalServerError/InternalServerError";
import AccessDeniedError from "../src/components/elements/ErrorPages/AccessDeniedError/AccessDeniedError";
import NotFoundError from "../src/components/elements/ErrorPages/NotFoundError/NotFoundError";

//import { history } from "../.";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          {/* <Router history={history}> */}
          <Switch>
            {/*<PrivateRoute exact path="/" component={HomePage} />
             <Route path="/login" component={LoginPage} /> 
            */}
            <Route path="/" exact component={HomePage} />
            <Route path="/customer-list" component={CustomerListPage} />
            <Route path="/customerDetails/:id" component={CustomerDetails} />
            <Route path="/customerCreate" component={CreateCusomterModal} />
            <Route path="/customerUpdate/:id" component={UpdateCustomerModal} />
            <Route path="/customerDelete/:id" component={DeleteCustomerModal} />
            <Route
              path="/customerHistory/:id"
              component={HistoryCustomerModal}
            />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/500" component={InternalServerError} />
            <Route path="/401" component={AccessDeniedError} />
            <Route path="/403" component={AccessDeniedError} />
            <Route path="*" component={NotFoundError} />
            {/* <Redirect from="*" to="/" /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
