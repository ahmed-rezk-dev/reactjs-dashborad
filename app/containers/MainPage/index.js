/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
// Antd
import { Layout, Breadcrumb } from 'antd';
// core components
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
// Routes
import routes from '../../routes';
const { Content } = Layout;
// messages
// import messages from './messages';

export function HomePage({ history }) {
	const [collapsed, setCollapsed] = useState(false);
	const toggle = () => {
		setCollapsed(!collapsed);
	};
	const childProps = { collapsed, toggle, history };

	const switchRoutes = (
		<Switch>
			{routes.map(prop => {
				if (prop.layout === '/admin') {
					return (
						<Route
							path={prop.layout + prop.path}
							component={prop.component}
							key={prop.path}
						/>
					);
				}
				return null;
			})}
			<Redirect from="/admin" to="/admin/dashboard" />
		</Switch>
	);
	return (
		<Layout style={{ minHeight: '100vh' }}>
			{/* Sidebar */}
			<Sidebar {...childProps} routes={routes} />
			<Layout>
				{/* Navbar */}
				<Navbar {...childProps} />
				{/* Content */}
				<Content style={{ margin: '0 16px' }}>
					{/* Breadcrumb */}
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
					{/* switchRoutes */}
					<div style={{ padding: 24, minHeight: 360 }}>{switchRoutes}</div>
				</Content>
				{/* Footer */}
				<Footer />
			</Layout>
		</Layout>
	);
}

HomePage.propTypes = {
	history: PropTypes.object,
};

export default HomePage;
