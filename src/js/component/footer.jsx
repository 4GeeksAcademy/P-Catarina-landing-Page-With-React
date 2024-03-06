import React from "react";
import PropType from "prop-types";


const Footer = (props) => {
	return (
		<div className="bg-dark text-center text-light mt-4 py-3">
            <p>{props.text}</p>
        </div>
    ) 
};

Footer.propTypes = {
    text: PropType.string,
};


export default Footer;