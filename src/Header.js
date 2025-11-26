import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";
function Header(props) {
const {onToggleTheme} = useContext(ThemeContext);



  return (
    <>
      <h1 id="title">{props.title}</h1>
      <Button onClick={onToggleTheme}>Mudar Thema</Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
Header.defaultProps = {
  title: "Título padrão",
};

export default Header;
