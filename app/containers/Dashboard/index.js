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
import React, { memo, useState, useCallback, useMemo, useEffect } from 'react';
import io from 'socket.io-client';
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
import CpuChart from 'components/CpuChart';
import {
	LineChart,
	Line,
	Tooltip,
	Legend,
	XAxis,
	YAxis,
	CartesianGrid,
} from 'recharts';

var defaultSpan = 0;
var spans = [];

export function Dashboard({ fetchAccount }) {
	useInjectReducer({
		key: 'dashboard',
		reducer,
	});
	useInjectSaga({
		key: 'dashboard',
		saga,
	});

	const [cpuDataset, setCpuDataset] = useState([
		{
			name: 'Page A',
			Usage: 7,
			label: 2,
		},
		{
			name: 'Page A',
			Usage: 2,
			label: 2,
		},
		{
			name: 'Page A',
			Usage: 5,
			label: 2,
		},
		{
			name: 'Page A',
			Usage: 4,
			label: 2,
		},
		{
			name: 'Page A',
			Usage: 1,
			label: 2,
		},
		{
			name: 'Page A',
			Usage: 8,
			label: 2,
		},
		{
			name: 'Page A',
			Usage: 2,
			label: 2,
		},
		{
			name: 'Page A',
			Usage: 5,
			label: 2,
		},
	]);

	const [cpuLatest, setCpuLatest] = useState('1');
	const [retention, setRetention] = useState('1');
	const [interval, setInterval] = useState('1');

	var port = '';
	var socketPath = '/socket.io';
	var socket = io(
		location.protocol +
			'//' +
			location.hostname +
			':' +
			(port || location.port),
		{
			path: socketPath,
			reconnectionDelayMax: 7000,
		},
	);

	useEffect(() => {
		socket.on('esm_stats', function(data) {
			var os = data.os;
			var responses = data.responses;
			const latest = cpuDataset[cpuDataset.length - 1];
			// if (latest.Usage != os.cpu) {
			updateCpu(os.cpu, os.timestamp);
			setCpuLatest(os.cpu.toFixed());
			// }
		});
	}, []);

	const updateCpu = (cpu, timestamp) => {
		const data = cpuDataset;
		const newData = {
			name: timestamp,
			Usage: cpu,
			label: 2,
		};
		data.push(newData);
		data.shift();
		setCpuDataset(data);
	};

	useCallback(() => updateCpu, []);

	const renderLineChart = useMemo(
		() => (
			<LineChart
				width={600}
				height={300}
				data={cpuDataset}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				{/* <XAxis dataKey="name" /> */}
				<YAxis />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="Usage"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
					dot={{ stroke: 'red', strokeWidth: 2 }}
					isAnimationActive={true}
					animationEasing="linear"
				/>
			</LineChart>
		),
		[cpuLatest],
	);

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
			{renderLineChart}
			<h3>{cpuLatest} %</h3>
			{/*<CpuChart cpuDataset={cpuDataset} /> */}
			{/*<Button type="danger" onClick={() => updateHandler()}></Button> */}
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

export default compose(withConnect)(Dashboard);
