import React from 'react';
import data from '../../utils/data';
import './Projects.css';


const Projects = () => {
	return (
		<section id="projects">
			<h5>Meus projetos mais recentes</h5>
			<h2>Projetos</h2>

			<div className="container project__container">

				{ data.map(({ id, title, github, demo, img }) => {
					return (
						<article className="project__item" key={ id}>
							<div className="project__item-image">
								<img src={ img } alt={ title } />
							</div>

							<h3>{ title }</h3>
							<div className="project__item-ct">
								<a
									href={ github }
									className="btn"
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</a>

								<a
									href={ demo }
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer"
								>
									Demo
								</a>
							</div>

						</article>
					);
				}) }

			</div>

		</section>
	);
};

export default Projects;
