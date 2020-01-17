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
const { Header } = Layout;
function Navbar({ collapsed, toggle, history }) {
	const childProps = { history };

	return (
		<Header className="mainContainer">
			<Row type="flex" justify="space-between">
				<Col>
					<Icon
						className="trigger"
						type={collapsed ? 'menu-unfold' : 'menu-fold'}
						onClick={toggle}
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
};

export default memo(Navbar);
