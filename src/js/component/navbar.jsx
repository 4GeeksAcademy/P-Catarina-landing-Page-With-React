import React from "react";


const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid px-4">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler border-dark-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon border-primary"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                {props.navLinks}
            </ul>
            </div>
        </div>
        </nav>
	);
};

export default Navbar;