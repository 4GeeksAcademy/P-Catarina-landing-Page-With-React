import React from "react";
import PropType from "prop-types";


const Card = (props) => {
	return (
		<div className="card col m-3">
        <img src={props.imageURL} className="card-img-top" alt={props.imageAlt} />
        <div className="card-body text-center">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
        </div>
        </div>
    ) 
};

Card.propTypes = {
    imageURL: PropType.string,
    imageAlt: PropType.string,
	title: PropType.string,
	description: PropType.string,
    buttonLabel: PropType.string,
	buttonUrl: PropType.string,
};


export default Card;