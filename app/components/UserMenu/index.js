/**
 *
 * UserMenu
 *
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Dropdown, Menu, Button, Icon } from 'antd';
import { removeAuthToken } from '../../utils/Auth';
import { setCurrentUser } from '../../containers/App/actions';
import configureStore from '../../configureStore';
import messages from './messages';

const store = configureStore();

function UserMenu({ history }) {
	const logout = () => {
		removeAuthToken();
		store.dispatch(setCurrentUser(null));
		history.go('/auth/login');
	};

	const userMenu = (
		<Menu>
			<Menu.Item className="menu-item">
				<a rel="noopener noreferrer" href="#....">
					<Icon type="user" />
					My Profile
				</a>
			</Menu.Item>
			<Menu.Item className="menu-item">
				<a rel="noopener noreferrer" href="#....">
					<Icon type="setting" />
					Settings
				</a>
			</Menu.Item>
			<Menu.Item className="menu-item">
				<a rel="noopener noreferrer" href="#....">
					<Icon type="bulb" />
					Support
				</a>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item className="menu-item" onClick={() => logout()}>
				<div>
					<Icon type="logout" />
					<FormattedMessage {...messages.logout} />
				</div>
			</Menu.Item>
		</Menu>
	);

	return (
		<Dropdown
			overlay={userMenu}
			placement="bottomLeft"
			className="navbar-dropdown"
		>
			<Button icon="menu" />
		</Dropdown>
	);
}

UserMenu.propTypes = {
	history: PropTypes.object,
};

export default memo(UserMenu);
