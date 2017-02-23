import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div className="body">
				<div className="main" role="main">
					{React.cloneElement(this.props.children, this.propsToPass)}
				</div>
			</div>
		);
	}
}
