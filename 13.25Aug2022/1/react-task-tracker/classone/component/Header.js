import PropTypes from 'prop-types'
import "./Header.css";
const Header =(props) =>{
    return(<Header>
        <h1> Hello header,{props.title}</h1>
        <h2 className = "h2 head" > H2 Heading</h2>
        <h3 id = "h3Head">H3 Heading</h3>
        </Header>
    );
};
const headingStyle={
    color:"darkcyan",
    backgroundColor :"lightblue",
    textAlign:"center",

}

Header.defaultProps = {
    title:"Task Tracker",
}
Header.propTypes = {
    title:PropTypes.string.isRequired,
};

export default Header;
