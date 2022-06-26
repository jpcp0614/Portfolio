import React from 'react';
import ME from '../../assets/about-jp.jpg';
import { FaAward } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { IoIosConstruct } from 'react-icons/io';
import './About.css';

const About = () => {
	return (
		<section id="about">
			<h5>Um pouco</h5>
			<h2>Sobre mim</h2>

			<div className="container about__container">
				
				<div className="about__me">
					<div className="about__me-image">
						<img src={ ME } alt="Imagem sobre mim" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward />
							<h5>Experiência</h5>
							<small>...<IoIosConstruct />...</small>
						</article>

						<article className="about__card">
							<HiUsers />
							<h5>Clientes</h5>
							<small>...<IoIosConstruct />...</small>
						</article>

						<article className="about__card">
							<VscFolderLibrary />
							<h5>Projects</h5>
							<small>...<IoIosConstruct />...</small>
						</article>
					</div>

					<p>
					Sou Desenvolvedor Web Fullstack em formação.
					Tenho interesse por programação desde que conheci Python (bem básico).
					Posteriormente, através de um amigo, conheci o mundo da programação voltada a Web, me apaixonei.
					Estou aberto a novas oportunidades em programação! Toda nova experiencia é bem-vinda!!!
					</p>

					<a href="#contact" className="btn btn-primary">Vamos conversar</a>
				</div>

			</div>

		</section>
	);
};

export default About;
