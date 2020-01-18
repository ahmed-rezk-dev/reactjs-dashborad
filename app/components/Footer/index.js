/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
const { Footer } = Layout;
function FooterC() {
	return (
		<Footer style={{ textAlign: 'center' }}>
			React Dashboard ©2020 Created by Ahmed Rezk
		</Footer>
	);
}

FooterC.propTypes = {};

export default FooterC;
