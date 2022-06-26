import React from 'react';
import CV from '../../assets/joao-paulo_cv.pdf';

const Ct = () => {
	return (
    <div className="ct">
      <a href={ CV } className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contato</a>
    </div>
  );
};

export default Ct;
