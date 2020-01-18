/**
 *
 * Sidebar
 *
 */

import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Row, Avatar, Divider } from 'antd';
// Style
import './style.less';
// Images
import userImage from '../../assets/img/user.jpg';
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({ toggle, collapsed, routes, history }) => {
	const currentPath = history.location.pathname;
	const links = routes.map(prop => (
		<Menu.Item key={prop.layout + prop.path} className="menuItem">
			<NavLink to={prop.layout + prop.path} key={prop.path}>
				<Icon className="navbar-title-icon" type={prop.icon} />
				<span>{prop.name}</span>
			</NavLink>
		</Menu.Item>
	));
	return (
		<Sider collapsible collapsed={collapsed} onCollapse={toggle}>
			<Row className="logo" type="flex" justify="center">
				<Avatar className="avatar-img" size={120} src={userImage} />
				<h3 className="user-title">Ahmed Rezk</h3>
				<small className="user-type-title">Super Admin</small>
			</Row>
			<Divider />
			<Menu
				defaultSelectedKeys={[currentPath]}
				defaultOpenKeys={[currentPath]}
				mode="inline"
				className="menu"
			>
				{links}
				<SubMenu
					className="navbar-subMenu"
					key="sub1"
					title={
						<span className="navbar-subMenu-title">
							<Icon className="navbar-title-icon" type="eye" />
							<span>Sub Menu</span>
						</span>
					}
				>
					<Menu.Item className="navbar-subMenu-item" key="3">
						Tom
					</Menu.Item>
					<Menu.Item className="navbar-subMenu-item" key="4">
						Bill
					</Menu.Item>
					<Menu.Item className="navbar-subMenu-item" key="5">
						Alex
					</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
	);
};
Sidebar.propTypes = {
	collapsed: PropTypes.bool,
	toggle: PropTypes.func,
	routes: PropTypes.array,
	history: PropTypes.object,
};

export default memo(Sidebar);
