/**
 *
 * Roles
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// UI
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import TableSkeleton from 'components/TableSkeleton';
import makeSelectRoles from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { rolesRequest, rolesAdd, rolesEdit, rolesDelete } from './actions';
// import CustomRolesTable from 'components/CustomRolesTable';

const EditableContext = React.createContext();

// const EditableRow = ({ form, index, ...props }) => (
// 	<EditableContext.Provider value={form}>
// 		<tr {...props} />
// 	</EditableContext.Provider>
// );

// const EditableFormRow = Form.create()(EditableRow);
export function Roles({ fetchRoles, roles, addRoles, editRoles, deleteRoles }) {
	// console.log('roles:', Object.entries(roles));
	useInjectReducer({ key: 'roles', reducer });
	useInjectSaga({ key: 'roles', saga });
	// States
	const [editing, setEditing] = useState(false);
	// Child Props
	const CustomRolesTablePropsMap = {
		data: roles.data,
		isLoading: roles.isLoading,
		addRoles,
		editRoles,
		deleteRoles,
	};

	useEffect(() => {
		fetchRoles();
	}, []);

	const handleDelete = key => {
		console.log('key', key);
	};

	const dataSource = [
		{
			key: '1',
			name: 'Mike',
			createdAt: '2019-10-30T05:27:45.355Z',
			updatedAt: '2019-10-30T05:27:45.355Z',
		},
		{
			key: '2',
			name: 'dsa d asdasd as',
			createdAt: '2019-10-30T05:27:45.355Z',
			updatedAt: '2019-10-30T05:27:45.355Z',
		},
	];

	const columns = [
		{
			title: 'Title',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Created At',
			dataIndex: 'createdAt',
			key: 'createdAt',
		},
		{
			title: 'Last Update',
			dataIndex: 'updatedAt',
			key: 'updatedAt',
		},
		{
			title: 'operation',
			dataIndex: 'operation',
			render: (text, record) =>
				dataSource.length >= 1 ? (
					<Popconfirm
						title="Sure to delete?"
						onConfirm={() => handleDelete(record.key)}
					>
						<Button type="danger">Delete</Button>
					</Popconfirm>
				) : null,
		},
	];

	return (
		<div>
			<Helmet>
				<title>Roles</title>
				<meta name="description" content="Description of Roles" />
			</Helmet>
			<Table dataSource={roles.data} columns={columns} />
		</div>
	);
}

Roles.propTypes = {
	fetchRoles: PropTypes.func.isRequired,
	addRoles: PropTypes.func.isRequired,
	editRoles: PropTypes.func.isRequired,
	deleteRoles: PropTypes.func.isRequired,
	roles: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
	roles: makeSelectRoles(),
});

function mapDispatchToProps(dispatch) {
	return {
		fetchRoles: () => dispatch(rolesRequest()),
		addRoles: payload => dispatch(rolesAdd(payload)),
		editRoles: payload => dispatch(rolesEdit(payload)),
		deleteRoles: payload => dispatch(rolesDelete(payload)),
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Roles);
