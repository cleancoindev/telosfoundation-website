import React from 'react';
import FrontPage from './pages/front_page';
import Download from './pages/download';
import Arbitrator from './pages/arbitrator';
import DAppsPage from './pages/dapps';
import Governance from './pages/governance';
import FAQPage from './pages/faq';
import BlockProducerCandidates from './pages/block_prod_candidates';
import HowToVote from './pages/how_to_vote';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import SideNavigation from './side_navigation';

import '../styles/body.css';

const MainSite = ({site_content}) => {
	if(!site_content) return <div>waiting...</div>;
	return (
		<div>
			<Header />
			<main className='main'>

				<Switch>
					<Route path='/:language/downloads' render={() => <Download downloads_page={site_content.downloads_page} language={site_content.language} />} />
					<Route path='/:language/arbitrators' render={() => <Arbitrator arbitrators_page={site_content.arbitrators_page} />} />
					<Route path='/:language/dapps' render={() => <DAppsPage dapps_page={site_content.dapps_page} />} />
					<Route path='/:language/governance' render={() => <Governance governance_page={site_content.governance_page} />} />
					<Route path='/:language/faq' render={() => <FAQPage faq_page={site_content.faq_page} />} />
					<Route path='/:language/candidates' component={BlockProducerCandidates} />
					<Route path='/:language/how_to_vote' component={HowToVote} />

					<Route path='/downloads' render={() => <Download downloads_page={site_content.downloads_page} language={site_content.language} />} />
					<Route path='/arbitrators' render={() => <Arbitrator arbitrators_page={site_content.arbitrators_page} />} />
					<Route path='/dapps' render={() => <DAppsPage dapps_page={site_content.dapps_page} />} />
					<Route path='/governance' render={() => <Governance governance_page={site_content.governance_page} />} />
					<Route path='/faq' render={() => <FAQPage faq_page={site_content.faq_page} />} />
					<Route path='/candidates' component={BlockProducerCandidates} />
					<Route path='/how_to_vote' component={HowToVote} />

					<Route path='/:language' render={() => <FrontPage landing_page={site_content.landing_page} language={site_content.language} />} />
					<Route path='/' render={() => <FrontPage landing_page={site_content.landing_page} language={site_content.language} />} />
				</Switch>
			</main>
			<Footer />
			<SideNavigation />
		</div>
	);
};

function mapStateToProps(state){
	return {site_content: state.site_content};
}

export default withRouter(connect(mapStateToProps, null)(MainSite));