import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


const Home = () => {
	return (
		<div id="home">
			<Navbar navLinks = {NavItems} />
			<Jumbotron title = {JumboContent.title}  description = {JumboContent.description}
				buttonLabel = {JumboContent.buttonLabel}  buttonUrl = {JumboContent.buttonUrl}
			/>
			<div class="container-fluid d-lg-flex">
				{GetCards}
			</div>
			<Footer text = {FooterContent} />
		</div>
	);
};

export default Home;



//COMPONENTS CONTENT

const NavTitles = ['Home', 'About', 'Services', 'Contact'];

const NavItems = NavTitles.map((title) =>
                <li className="nav-item">
                <a className="nav-link" href="#">{title}</a>
                </li>);

//JUMBO

const JumboContent = {
    title: "A Warm Helcome!",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    buttonLabel:"Call to Action!",
    buttonUrl:"#"
};

//FOOTER
const FooterContent = "Copyright © Your website " + new Date().getFullYear();


//CARDS

let cardsContent = [

	//card 1
	{
	imageURL: "https://images.unsplash.com/photo-1590354893781-90ed27ce7ce9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	imageAlt: "House in the sunset",
	title: "House",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
	buttonLabel: "Find Out More!",
	buttonUrl: "#",
	},

	//card 2
	{
	imageURL: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	imageAlt: "House in the sunset",
	title: "Forest",
	description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad miing elit, sed do eius.",
	buttonLabel: "Find Out More!",
	buttonUrl: "#",
	},
	
	//card 3
	{
	imageURL: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	imageAlt: "House in the sunset",
	title: "Seashore",
	description: "Lorem ipsum dolor sit aing elit, sed do eiusmet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lausmod tempor incibore.",
	buttonLabel: "Find Out More!",
	buttonUrl: "#",
	},

	//card 4
	{
	imageURL: "https://images.unsplash.com/photo-1494625927555-6ec4433b1571?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	imageAlt: "House in the sunset",
	title: "Moutain",
	description: "Etur adipiscing ecididunt ut labore et dolor sit amet, consectetur adipiscing ecididunt ut labore et dolore maet, consectetur adipiscing elit, sed do.",
	buttonLabel: "Find Out More!",
	buttonUrl: "#",
	}
	];


//CARDS GENERATOR

const GetCards = cardsContent.map((card, index) =>
	<Card imageURL = {cardsContent[index].imageURL}
	imageAlt = {cardsContent[index].imageAlt}
	title = {cardsContent[index].title}
	description = {cardsContent[index].description}
	buttonLabel = {cardsContent[index].buttonLabel}
	buttonUrl = {cardsContent[index].buttonUrl} />)