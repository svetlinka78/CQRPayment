import React from "react";
import Menu from "../Menu/Menu";
import { Container, Row } from "react-bootstrap";

const layout = (props) => {
  return (
    <Container>
      <Row>
        <Menu />
      </Row>
      <main>{props.children}</main>
    </Container>
  );
};

export default layout;

//https://reactjs.org/docs/composition-vs-inheritance.html
//composition vs inheritance
// Some components don’t know their children ahead of time. This is especially
//common for components like Sidebar or Dialog that represent generic “boxes”.
// We recommend that such components use the special children prop to pass children
// elements directly into their output
