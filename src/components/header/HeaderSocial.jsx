import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const HeaderSocial = () => {
	return (
		<div className="header__socials">
			<a href="https://www.linkedin.com/in/jpcp0614/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
			<a href="https://github.com/jpcp0614/" target="_blank" rel="noreferrer"><BsGithub /></a>
		</div>
	);
};

export default HeaderSocial;
