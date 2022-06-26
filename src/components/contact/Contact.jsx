import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import ToastAnimated, { showToast } from '../toast/Toast';
import './Contact.css';

const Contact = () => {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hlh6c2a', 'template_28ogil9', form.current, '3pA0TLYcBl11C0A3S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

		e.target.reset();
  };

	const handleClick = () => {
		showToast({ type: "success", message: "Mensagem de sucesso" });
	}

	return (
		<section id="contact">
			<h5>Para entrar em</h5>
			<h2>Contato</h2>
			<ToastAnimated />

			<div className="container contact__container">
				<div className="contact__options">

					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon"/>
						<h4>Email</h4>
						<h5>jpcp0614@gmail.com</h5>
						<a href="mailto:jpcp0614@gmail.com">Envie sua mensagem</a>
					</article>

					<article className="contact__option">
						<BsLinkedin className="contact__option-icon"/>
						<h4>LinkedIn</h4>
						<h5>https://www.linkedin.com/in/jpcp0614/</h5>
						<a href="https://www.linkedin.com/in/jpcp0614/" target="_blank" rel="noreferrer">Envie sua mensagem</a>
					</article>

				</div>
					
					<form ref={ form } onSubmit={ sendEmail }>
						<input type="text" name="name" placeholder="Digite seu nome"  required/>
						<input type="text" name="email" placeholder="Digite seu email"  required/>
						<textarea name="message" rows="7" placeholder="Digite sua mensagem"  required></textarea>
						<button type="submit" className="btn btn-primary" onClick={ handleClick } >Enviar</button>
					</form>

			</div>
		</section>
	);
};

export default Contact;
