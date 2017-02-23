import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
	render() {
		return (
			<footer className="mt-none" id="footer">
				<div className="container">
					<div className="row">
						<div className="footer-ribbon">
							<span>Get in Touch</span>
						</div>
						<div className="col-md-4">
							<div className="contact-details">
								<h4>Contact Us</h4>
								<ul className="contact">
									<li><p><i className="fa fa-map-marker"></i> <strong>Address:</strong> 320 Martin St, Birmingham, MI, United States</p></li>
									<li><p><i className="fa fa-phone"></i> <strong>Phone:</strong> (123) 456-789</p></li>
									<li><p><i className="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:hello@everdays.com">hello@everdays.com</a></p></li>
								</ul>
							</div>
						</div>
						<div className="col-md-2 pull-right">
							<h4>Follow Us</h4>
							<ul className="social-icons">
								<li className="social-icons-facebook"><a href="https://www.facebook.com/Everdaysapp/" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
								<li className="social-icons-twitter"><a href="https://twitter.com/everdaysapp/" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
								<li className="social-icons-linkedin"><a href="https://www.linkedin.com/company/16190747/details/" target="_blank" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
								<li className="social-icons-instagram"><a href="https://www.instagram.com/everdaysapp/" target="_blank" title="Instagram"><i className="fa fa-instagram"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						<div className="row">
							<div className="col-md-1">
								<a href="https://requiemapp.com/" className="logo">
									<img alt="Porto Website Template" className="img-responsive" src="../../styles/img/logos/u-logo@2x.png" />
								</a>
							</div>
							<div className="col-md-7">
								<p>© Copyright 2017. All Rights Reserved.</p>
							</div>
							<div className="col-md-4">
								<nav id="sub-menu">
									<ul>
										<li><a href="http://help.everdays.com/">FAQ</a></li>
										<li><a href="mailto:hello@everdays.com">Contact</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
