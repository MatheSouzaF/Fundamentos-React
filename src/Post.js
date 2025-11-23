import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <>
      <article>
        <strong>{props.title}</strong>
        <br />
        <small>{props.subtitle}</small>
        <br />
        Media: {props.likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Post;
