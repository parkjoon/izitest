import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Td, Tr } from 'reactable';

class MemorialList extends Component {
	parseName(name) {
		return name ? `${name.last || ''} ${name.first || ''}`.trim() : 'UNKNOWN';
	}

	render() {
		return (
			<Table className="table" sortable={true} defaultSort={{column: 'Date Created', direction: 'desc'}}>
				{this.props.memorials.map(memorial => {
					return (
						<Tr key={`memorial-table-row-${memorial._id}`}>
							<Td column="Name">{this.parseName(memorial.name)}</Td>
							<Td column="Date Created">{new Date(memorial.creationDate)}</Td>
						</Tr>
					);
				})}
			</Table>
		);
	}
}

function mapStateToProps(state) {
	return {
		memorials: state.memorials
	};
}

export default connect(
	mapStateToProps,
	null
)(MemorialList);
