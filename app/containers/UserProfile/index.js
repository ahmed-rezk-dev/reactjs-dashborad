/**
 *
 * UserProfile
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function UserProfile() {
  useInjectReducer({ key: 'userProfile', reducer });
  useInjectSaga({ key: 'userProfile', saga });

  return (
    <div>
      <Helmet>
        <title>UserProfile</title>
        <meta name="description" content="Description of UserProfile" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

UserProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userProfile: makeSelectUserProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UserProfile);
