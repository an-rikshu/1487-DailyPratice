import React from "react";
import PropTypes from 'prop-types'
const Header = ({ title }) => {
 return (
 <header>
 <h1 style={headingStyle}>Hello, {title}</h1>
 </header>
 );
};
const headingStyle = {
 color: 'darkcyan',
 backgroundColor: 'lightblue',
 textAlign: 'center'
}
Header.defaultProps = {
 title: 'Task Tracker',
}
Header.propTypes = {
title: PropTypes.string.isRequired,
}
export default Header;
