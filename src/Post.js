import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

function Post(props) {


  return (
    <>
      <article>
        <PostHeader 
        onRemove={props.onRemove}
        title={props.title}
        id={props.id}
        subtitle={props.subtitle}
        read={props.read}
        />
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
  onRemove: PropTypes.func.isRequired,
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
  subtitle: PropTypes.string,
  read: PropTypes.bool.isRequired,
};

export default Post;
