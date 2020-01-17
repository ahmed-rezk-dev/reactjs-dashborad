/**
 *
 * Dashboard
 *
 */

import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React, { memo } from 'react';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { Button } from 'antd';
import { getAccount } from './actions';
import makeSelectDashboard from './selectors';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

export function Dashboard({ fetchAccount }) {
	useInjectReducer({ key: 'dashboard', reducer });
	useInjectSaga({ key: 'dashboard', saga });

	return (
		<div>
			<Helmet>
				<title>Dashboard</title>
				<meta name="description" content="Description of Dashboard" />
			</Helmet>
			<FormattedMessage {...messages.header} />
			<br />
			{/* <Button
				variant="contained"
				color="secondary"
				onClick={() => fetchAccount()}
			>
				Fetch Account
			</Button> */}
			<Button type="primary">Primary</Button>
			<Button>Default</Button>
			<Button type="dashed">Dashed</Button>
			<Button type="danger">Danger</Button>
			<Button type="link">Link</Button>
			<br />
			<br />
		</div>
	);
}

Dashboard.propTypes = {
	fetchAccount: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
	return {
		fetchAccount: () => dispatch(getAccount()),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose(
	withConnect,
	memo,
)(Dashboard);
