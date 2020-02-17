/**
 *
 * Sidebar
 *
 */

import React, { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Row, Avatar, Divider } from 'antd';
// Style
import './style.less';
// Images
import userImage from '../../assets/img/user.jpg';
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({ toggle, collapsed, routes, history, currentRoute }) => {
	const currentPath = history.location.pathname;

	// Avatar
	const avatarFunc = () => {
		if (!collapsed) {
			return <Avatar className="avatar-img" size={120} src={userImage} />;
		}
		return null;
	};
	const memoizedAvatar = useMemo(avatarFunc, [collapsed]);

	// Convert Routes tp groups
	const groupBy = (list, keyGetter) => {
		const map = new Map();
		list.forEach(route => {
			const key = keyGetter(route);
			if (route.group) {
				const collection = map.get(key);
				if (!collection) {
					map.set(key, [route]);
				} else {
					collection.push(route);
				}
			} else {
				const collection = map.get('single');
				if (!collection) {
					map.set('single', [route]);
				} else {
					collection.push(route);
				}
			}
		});
		return map;
	};
	const getRoutes = groupBy(routes, route => route.group);
	// Links map
	const links = [];
	getRoutes.forEach((prop, key) => {
		if (key === 'single') {
			prop.forEach(singleItem => {
				const linkTo = singleItem.layout + singleItem.path;
				links.push(
					<Menu.Item key={linkTo} className="menuItem">
						<NavLink to={linkTo} key={singleItem.path}>
							<Icon className="navbar-title-icon" type={singleItem.icon} />
							<span>{singleItem.name}</span>
						</NavLink>
					</Menu.Item>
				);
			});
		} else {
			links.push(
				<SubMenu
					className="navbar-subMenu"
					key={key.name}
					title={
						<span className="navbar-subMenu-title">
							<Icon className="navbar-title-icon" type={key.icon} />
							<span>{key.name}</span>
						</span>
					}
				>
					{prop.map(groupItem => {
						const linkTo = `${groupItem.layout}/${groupItem.group.name}${groupItem.path}`;
						return (
							<Menu.Item key={linkTo} className="navbar-subMenu-item">
								<NavLink to={linkTo} key={groupItem.path}>
									<Icon className="navbar-title-icon" type={groupItem.icon} />
									<span>{groupItem.name}</span>
								</NavLink>
							</Menu.Item>
						);
					})}
				</SubMenu>
			);
		}
	});

	return (
		<Sider collapsible collapsed={collapsed} onCollapse={toggle}>
			<Row className="logo" type="flex" justify="center">
				{memoizedAvatar}
				<h3 className="user-title">Ahmed Rezk</h3>
				<small className="user-type-title">Super Admin</small>
			</Row>
			<Divider />
			<Menu
				defaultSelectedKeys={[currentPath]}
				defaultOpenKeys={[currentRoute.group ? currentRoute.group.name : null]}
				mode="inline"
				className="menu"
			>
				{links}
			</Menu>
		</Sider>
	);
};
Sidebar.propTypes = {
	collapsed: PropTypes.bool,
	toggle: PropTypes.func,
	routes: PropTypes.array,
	history: PropTypes.object,
	currentRoute: PropTypes.object,
};

export default memo(Sidebar);
