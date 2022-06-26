import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import './Nav.css';

const Nav = () => {

	const [active, setActive] = useState('#header');

	return (
		<nav>
			<a
				href="#header"
				className={ active === '#header' ? 'active' : '' }
				onClick={() => setActive('#header')}
			>
				<AiOutlineHome />
			</a>

			<a
				href="#about"
				className={ active === '#about' ? 'active' : '' }
				onClick={() => setActive('#about')}
				>
					<AiOutlineUser />
				</a>
			
			<a
				href="#portfolio"
				className={ active === '#portfolio' ? 'active' : '' }
				onClick={() => setActive('#portfolio')}
			>
				<BiBook />
			</a>
			
			<a
				href="#contact"
				className={ active === '#contact' ? 'active' : '' }
				onClick={() => setActive('#contact')}
				>
					<BiMessageSquareDetail />
				</a>
		</nav>
	);
};

export default Nav;
