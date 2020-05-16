//A higher-order component (HOC)
//https://medium.com/front-end-weekly/loading-components-asynchronously-in-react-app-with-an-hoc-61ca27c4fda7
import React, { Component } from "react";

const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      importComponent().then((cmp) => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const Compt = this.state.component;
      return Compt ? <Compt {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
