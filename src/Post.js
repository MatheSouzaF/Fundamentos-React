import React from "react";
import PropTypes from "prop-types";

function Post(props) {
if(props.read){
  return <h2>{props.title} já foi lido</h2>
}


  return (
    <>
      <article>
        <strong>{props.read ? <s>{props.title}</s> : props.title}</strong>
        <button onClick={() => props.onRemove(props.id)}>Remover</button>
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
