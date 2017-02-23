import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
	render() {
		return (
			<header id="header" className="header-narrow header-semi-transparent header-transparent-sticky-deactive header-transparent-bottom-border" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 1, "stickySetTop": "1"}'>
				<div className="header-body">
					<div className="header-container container">
						<div className="header-row">
							<div className="header-column">
								<div className="header-logo">
									<a href="https://requiemapp.com/"><img alt="Everdays" height="40" src="../../styles/img/logos/u-logo@2x.png" /></a>
								</div>
							</div>
							<div className="header-column">
								<div className="header-row">
									<div className="header-nav header-nav-dark-dropdown">
										<button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
											<i className="fa fa-bars"></i>
										</button>
										<div className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1 collapse">
											<nav>
												<ul className="nav nav-pills" id="mainNav">
													<li>
														<Link to='/'>Home</Link>
													</li>
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
