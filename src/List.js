import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import useWords from "./WordsHook";

const List = ({ data }) => (
  <ListGroup>
    {data.map(({ word }, index) => (
      <ListGroup.Item key={index}>{word}</ListGroup.Item>
    ))}
  </ListGroup>
);

const withData = (List) => {
  const ListWrapper = ({ word }) => {
    const { words } = useWords(word);
    return <List data={words} />;
  };

  return ListWrapper;
};

export default withData(List);
