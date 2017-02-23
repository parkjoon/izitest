import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../../common/Footer';
import Header from '../../common/Header';
import MemorialList from './MemorialList';
import { getMemorials } from '../../../utils/api';
import { setMemorials } from '../../../actions/memorials';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			receivedInitialMemorials: false
		};
	}

	// When this component first mounts, asynchronously call the REST API
	// endpoint to retrieve a fresh copy of the memorials.
	componentDidMount() {
		getMemorials()
			.then(res => {
				this.props.setMemorials(res.data.data);
				this.setState({ receivedInitialMemorials: true });
			})
			.catch(error => {
				console.log('Error getting memorials:', error);
			});
	}

	renderMemorials() {
		if(!this.props.memorials.length && this.state.receivedInitialMemorials) {
			return <div>There are no memorials to show!</div>;
		}
		return <MemorialList />;
	}

	render() {
		return (
			<div>
				<Header />
				<section className="section section-default section-default-scale-5 mt-none mb-none pb-none" style={{minHeight: '800px'}}>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="panel panel-default" style={{marginTop: '10%'}}>
									<div className="panel-heading">Memorials</div>
									<div className="panel-body">{this.renderMemorials()}</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		memorials: state.memorials
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setMemorials: memorials => dispatch(setMemorials(memorials))
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
