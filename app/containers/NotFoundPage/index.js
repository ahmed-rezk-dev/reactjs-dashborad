/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Grid, Typography, Button } from '@material-ui/core';
import messages from './messages';
import style from './style';

export default function NotFound({ location, history }) {
	const classes = style();
	const { state } = location;
	return (
		<div className={classes.pageBG}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justify="space-around"
			>
				<Grid
					container
					direction="column"
					justify="flex-start"
					alignItems="center"
					className={classes.status_code_title}
				>
					<Typography variant="h1">{state.status}</Typography>
				</Grid>
				<Grid
					container
					spacing={2}
					direction="column"
					justify="flex-end"
					alignItems="center"
					className={classes.contant_box_404}
				>
					<Grid item>
						<Typography variant="h4">
							<FormattedMessage {...messages.text_0} />
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1">{state.msg}</Typography>
					</Grid>
					<Grid item>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => history.goBack()}
						>
							<FormattedMessage {...messages.go_back} />
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

NotFound.propTypes = {
	location: PropTypes.object,
	history: PropTypes.object,
};
