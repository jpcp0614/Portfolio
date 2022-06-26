import React from 'react';
import CV from '../../assets/cv.txt';

const Ct = () => {
	return (
    <div className="ct">
      <a href={ CV } className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contato</a>
    </div>
  );
};

export default Ct;
