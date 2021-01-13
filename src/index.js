import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from "react-bootstrap";
import List from "./List";

const App = () => {
  const [value, setValue] = useState("tree");

  return (
    <Container className="my-5">
      <Form.Control
        type="text"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <List word={value} />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
