/**
 *
 * CustomBreadcrumb
 *
 */

import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import PropTypes from 'prop-types';

function CustomBreadcrumb({ currentRoute }) {
	const breadcrumbFunc = () => (
		<>
			{currentRoute.group !== undefined ? (
				<Breadcrumb.Item>
					<Icon type={currentRoute.group.icon} />
					<span>{currentRoute.group.name}</span>
				</Breadcrumb.Item>
			) : null}
			<Breadcrumb.Item>
				<Icon type={currentRoute.icon} />
				<span>{currentRoute.name}</span>
			</Breadcrumb.Item>
		</>
	);

	return (
		<Breadcrumb className="breadcrumb">
			<Breadcrumb.Item>
				<Icon type="home" />
				<span>Home</span>
			</Breadcrumb.Item>
			{breadcrumbFunc()}
		</Breadcrumb>
	);
}

CustomBreadcrumb.propTypes = {
	currentRoute: PropTypes.object,
};

export default CustomBreadcrumb;
