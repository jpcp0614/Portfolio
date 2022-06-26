import React from 'react';
import Ct from './Ct';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';
import './Header.css';

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Olá, me chamo</h5>
				<h1>João Paulo Pereira</h1>
				<h5 className="text-light">Desenvolvedor Fullstack</h5>
				<Ct />
				<HeaderSocial />

				<div className="me">
					<img src={ ME } alt="Minha foto" />
				</div>

				<a href="#contact" className="scroll__down">Scroll Down</a>
			</div>
		</header>
	);
};

export default Header;
