import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function PostHeader(props) {
  return (
    <>
      <strong>{props.read ? <s>{props.title}</s> : props.title}</strong>
      <Button
      onClick={() => props.onRemove(props.id)}>Remover</Button>
    </>
  );
}
PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
  subtitle: PropTypes.string,
  read: PropTypes.bool.isRequired,
};
