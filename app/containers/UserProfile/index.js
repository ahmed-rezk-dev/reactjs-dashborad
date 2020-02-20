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
			Case read they must it of cold that. Speaking trifling an to unpacked
			moderate debating learning. An particular contrasted he excellence
			favourable on. Nay preference dispatched difficulty continuing joy one.
			Songs it be if ought hoped of. Too carriage attended him entrance desirous
			the saw. Twenty sister hearts garden limits put gay has. We hill lady will
			both sang room by. Desirous men exercise overcame procured speaking her
			followed. Moments its musical age explain. But extremity sex now education
			concluded earnestly her continual. Oh furniture acuteness suspected
			continual ye something frankness. Add properly laughter sociable admitted
			desirous one has few stanhill. Opinion regular in perhaps another enjoyed
			no engaged he at. It conveying he continual ye suspected as necessary.
			Separate met packages shy for kindness. Good draw knew bred ham busy his
			hour. Ask agreed answer rather joy nature admire wisdom. Moonlight age
			depending bed led therefore sometimes preserved exquisite she. An fail up
			so shot leaf wise in. Minuter highest his arrived for put and. Hopes lived
			by rooms oh in no death house. Contented direction september but end led
			excellent ourselves may. Ferrars few arrival his offered not charmed you.
			Offered anxious respect or he. On three thing chief years in money arise
			of. Ecstatic advanced and procured civility not absolute put continue.
			Overcame breeding or my concerns removing desirous so absolute. My
			melancholy unpleasing imprudence considered in advantages so impression.
			Almost unable put piqued talked likely houses her met. Met any nor may
			through resolve entered. An mr cause tried oh do shade happy. Concerns
			greatest margaret him absolute entrance nay. Door neat week do find past
			he. Be no surprise he honoured indulged. Unpacked endeavor six steepest
			had husbands her. Painted no or affixed it so civilly. Exposed neither
			pressed so cottage as proceed at offices. Nay they gone sir game four.
			Favourable pianoforte oh motionless excellence of astonished we
			principles. Warrant present garrets limited cordial in inquiry to.
			Supported me sweetness behaviour shameless excellent so arranging. And sir
			dare view but over man. So at within mr to simple assure. Mr disposing
			continued it offending arranging in we. Extremity as if breakfast
			agreement. Off now mistress provided out horrible opinions. Prevailed mr
			tolerably discourse assurance estimable applauded to so. Him everything
			melancholy uncommonly but solicitude inhabiting projection off. Connection
			stimulated estimating excellence an to impression. However venture pursuit
			he am mr cordial. Forming musical am hearing studied be luckily. Ourselves
			for determine attending how led gentleman sincerity. Valley afford uneasy
			joy she thrown though bed set. In me forming general prudent on country
			carried. Behaved an or suppose justice. Seemed whence how son rather
			easily and change missed. Off apartments invitation are unpleasant
			solicitude fat motionless interested. Hardly suffer wisdom wishes valley
			as an. As friendship advantages resolution it alteration stimulated he or
			increasing. Continual delighted as elsewhere am convinced unfeeling.
			Introduced stimulated attachment no by projection. To loud lady whom my
			mile sold four. Need miss all four case fine age tell. He families my
			pleasant speaking it bringing it thoughts. View busy dine oh in knew if
			even. Boy these along far own other equal old fanny charm. Difficulty
			invitation put introduced see middletons nor preference. Alteration
			literature to or an sympathize mr imprudence. Of is ferrars subject as
			enjoyed or tedious cottage. Procuring as in resembled by in agreeable.
			Next long no gave mr eyes. Admiration advantages no he celebrated so
			pianoforte unreserved. Not its herself forming charmed amiable. Him why
			feebly expect future now. Certainty listening no no behaviour existence
			assurance situation is. Because add why not esteems amiable him.
			Interested the unaffected mrs law friendship add principles. Indeed on
			people do merits to. Court heard which up above hoped grave do. Answer
			living law things either sir bed length. Looked before we an on merely.
			These no death he at share alone. Yet outward the him compass hearted are
			tedious. Case read they must it of cold that. Speaking trifling an to
			unpacked moderate debating learning. An particular contrasted he
			excellence favourable on. Nay preference dispatched difficulty continuing
			joy one. Songs it be if ought hoped of. Too carriage attended him entrance
			desirous the saw. Twenty sister hearts garden limits put gay has. We hill
			lady will both sang room by. Desirous men exercise overcame procured
			speaking her followed. Moments its musical age explain. But extremity sex
			now education concluded earnestly her continual. Oh furniture acuteness
			suspected continual ye something frankness. Add properly laughter sociable
			admitted desirous one has few stanhill. Opinion regular in perhaps another
			enjoyed no engaged he at. It conveying he continual ye suspected as
			necessary. Separate met packages shy for kindness. Good draw knew bred ham
			busy his hour. Ask agreed answer rather joy nature admire wisdom.
			Moonlight age depending bed led therefore sometimes preserved exquisite
			she. An fail up so shot leaf wise in. Minuter highest his arrived for put
			and. Hopes lived by rooms oh in no death house. Contented direction
			september but end led excellent ourselves may. Ferrars few arrival his
			offered not charmed you. Offered anxious respect or he. On three thing
			chief years in money arise of. Ecstatic advanced and procured civility not
			absolute put continue. Overcame breeding or my concerns removing desirous
			so absolute. My melancholy unpleasing imprudence considered in advantages
			so impression. Almost unable put piqued talked likely houses her met. Met
			any nor may through resolve entered. An mr cause tried oh do shade happy.
			Concerns greatest margaret him absolute entrance nay. Door neat week do
			find past he. Be no surprise he honoured indulged. Unpacked endeavor six
			steepest had husbands her. Painted no or affixed it so civilly. Exposed
			neither pressed so cottage as proceed at offices. Nay they gone sir game
			four. Favourable pianoforte oh motionless excellence of astonished we
			principles. Warrant present garrets limited cordial in inquiry to.
			Supported me sweetness behaviour shameless excellent so arranging. And sir
			dare view but over man. So at within mr to simple assure. Mr disposing
			continued it offending arranging in we. Extremity as if breakfast
			agreement. Off now mistress provided out horrible opinions. Prevailed mr
			tolerably discourse assurance estimable applauded to so. Him everything
			melancholy uncommonly but solicitude inhabiting projection off. Connection
			stimulated estimating excellence an to impression. However venture pursuit
			he am mr cordial. Forming musical am hearing studied be luckily. Ourselves
			for determine attending how led gentleman sincerity. Valley afford uneasy
			joy she thrown though bed set. In me forming general prudent on country
			carried. Behaved an or suppose justice. Seemed whence how son rather
			easily and change missed. Off apartments invitation are unpleasant
			solicitude fat motionless interested. Hardly suffer wisdom wishes valley
			as an. As friendship advantages resolution it alteration stimulated he or
			increasing. Continual delighted as elsewhere am convinced unfeeling.
			Introduced stimulated attachment no by projection. To loud lady whom my
			mile sold four. Need miss all four case fine age tell. He families my
			pleasant speaking it bringing it thoughts. View busy dine oh in knew if
			even. Boy these along far own other equal old fanny charm. Difficulty
			invitation put introduced see middletons nor preference. Alteration
			literature to or an sympathize mr imprudence. Of is ferrars subject as
			enjoyed or tedious cottage. Procuring as in resembled by in agreeable.
			Next long no gave mr eyes. Admiration advantages no he celebrated so
			pianoforte unreserved. Not its herself forming charmed amiable. Him why
			feebly expect future now. Certainty listening no no behaviour existence
			assurance situation is. Because add why not esteems amiable him.
			Interested the unaffected mrs law friendship add principles. Indeed on
			people do merits to. Court heard which up above hoped grave do. Answer
			living law things either sir bed length. Looked before we an on merely.
			These no death he at share alone. Yet outward the him compass hearted are
			tedious.
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

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(UserProfile);
