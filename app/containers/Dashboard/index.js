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

import { Button, Row } from 'antd';
import Metric from 'components/Metric';
import { getAccount } from './actions';
import makeSelectDashboard from './selectors';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import {
	UsersSvg,
	MessagesSvg,
	OrdersSvg,
	MoneyBagSvg,
} from '../../assets/svg';
import './style.less';
export function Dashboard({ fetchAccount }) {
	useInjectReducer({ key: 'dashboard', reducer });
	useInjectSaga({ key: 'dashboard', saga });

	return (
		<>
			{/* <Helmet>
				<title>Dashboard</title>
				<meta name="description" content="Description of Dashboard" />
			</Helmet> */}

			<Row gutter={16} type="flex" justify="space-around">
				<Metric
					color="#2dce89"
					icon={UsersSvg}
					title="Users Total"
					count="100,000"
				></Metric>
				<Metric
					color="#f5365c"
					icon={MessagesSvg}
					title="Messages Total"
					count="10,000"
				></Metric>
				<Metric
					color="#1890ff"
					icon={OrdersSvg}
					title="Orders Total"
					count="20,000"
				></Metric>
				<Metric
					color="#613cea"
					icon={MoneyBagSvg}
					title="Money Total"
					count="60,000"
				></Metric>
			</Row>
		</>
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

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Dashboard);
