/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// core components
import { Layout, Icon, Row, Col } from 'antd';
// Style
import './style.less';
import UserMenu from 'components/UserMenu';
import NotificationsMenu from 'components/NotificationsMenu';
// import CustomBreadcrumb from 'components/CustomBreadcrumb';
const CustomBreadcrumb = React.lazy(() =>
	import('components/CustomBreadcrumb')
);
const { Header } = Layout;
function Navbar({ collapsed, toggle, history, currentRoute }) {
	const childProps = { history };

	return (
		<Header className="mainContainer">
			<Row type="flex" align="middle">
				<Col span={1}>
					<Icon
						className="trigger"
						type={collapsed ? 'menu-unfold' : 'menu-fold'}
						onClick={toggle}
					/>
				</Col>
				<Col span={21}>
					<CustomBreadcrumb
						className="breadcrumb"
						history={history}
						currentRoute={currentRoute}
					/>
				</Col>
				<Col>
					<NotificationsMenu {...childProps} />
					<UserMenu {...childProps} />
				</Col>
			</Row>
		</Header>
	);
}

Navbar.propTypes = {
	collapsed: PropTypes.bool,
	toggle: PropTypes.func,
	history: PropTypes.object,
	currentRoute: PropTypes.object,
};

export default memo(Navbar);
