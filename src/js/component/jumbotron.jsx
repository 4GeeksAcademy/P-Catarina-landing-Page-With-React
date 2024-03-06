import React from "react";
import PropType from "prop-types";


const Jumbotron = (props) => {
	return (
		<div className=" row m-4 p-4 bg-light">
        <div className="container-fluid py-5">
            <h1 className="display-2">{props.title}</h1>
            <p>{props.description}</p>
            <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
        </div>
        </div>
	)
};

Jumbotron.propTypes = {
	title: PropType.string,
	description: PropType.string,
    buttonLabel: PropType.string,
	buttonUrl: PropType.string,
};


export default Jumbotron;