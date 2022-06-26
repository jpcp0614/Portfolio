import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<a href="#footer" className="footer__logo">Meu Portfolio</a>

			<ul className="permalinks">
				<li><a href="#header">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Home</a></li>
			</ul>

			<div className="footer__socials">
				<a href="https://www.linkedin.com/in/jpcp0614/"><BsLinkedin /></a>
			</div>

			<div className="div footer__copyright">
				<small>&copy; JP - All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
