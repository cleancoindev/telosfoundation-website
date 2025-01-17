import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';

import Roadmap from './pages/roadmap';
import FrontPage from './pages/front_page';
import ExchangeOutreach from './pages/exchange_outreach';
import Checklist from './pages/checklist';
import Download from './pages/download';
import Board from './pages/board';
import Arbitrator from './pages/arbitrator';
import DAppsPage from './pages/dapps';
import Governance from './pages/governance';
import FAQPage from './pages/faq';
import BlockProducerCandidates from './pages/block_prod_candidates';
import HowToVote from './pages/how_to_vote';
import GrantProgram from './pages/grant';
import WorkerProposal from './pages/worker_proposal';
import History from './pages/history';

import Header from './process_site/header';
import Footer from './process_site/footer';
import '../styles/process_site/process_site.css';

class ProcessSite extends Component {
	componentDidMount(){
		window.scrollTo(0, 0);
	}

	render(){
		const { site_content } = this.props;
		if(!site_content) return <div>waiting...</div>;
		return (
			<div>
				<Header />
				<main className='process_site_main'>
					<Switch>
						<Route path='/:language/exchange_outreach' component={ExchangeOutreach} />
						<Route path='/:language/iwantmytlos' component={ExchangeOutreach} />
						<Route path='/:language/launch' component={Checklist} />
						<Route path='/:language/downloads' render={() => <Download downloads_page={site_content.downloads_page} language={site_content.language} />} />
						<Route path='/:language/arbitrators' render={() => <Arbitrator arbitrators_page={site_content.arbitrators_page} />} />
						<Route path='/:language/dapps' render={() => <DAppsPage dapps_page={site_content.dapps_page} />} />
						<Route path='/:language/governance' render={() => <Governance governance_page={site_content.governance_page} />} />
						<Route path='/:language/faq' render={() => <FAQPage faq_page={site_content.faq_page} />} />
						<Route path='/:language/candidates' component={BlockProducerCandidates} />
						<Route path='/:language/how_to_vote' component={HowToVote} />

						<Route path='/exchange_outreach' component={ExchangeOutreach} />
						<Route path='/iwantmytlos' component={ExchangeOutreach} />
						<Route path='/launch' component={Checklist} />
						<Route path='/foundation' component={Board} />
						<Route path='/downloads' render={() => <Download downloads_page={site_content.downloads_page} language={site_content.language} />} />
						<Route path='/arbitrators' render={() => <Arbitrator arbitrators_page={site_content.arbitrators_page} />} />
						<Route path='/dapps' render={() => <DAppsPage dapps_page={site_content.dapps_page} />} />
						<Route path='/governance' render={() => <Governance governance_page={site_content.governance_page} />} />
						<Route path='/faq' render={() => <FAQPage faq_page={site_content.faq_page} />} />
						<Route path='/candidates' component={BlockProducerCandidates} />
						<Route path='/how_to_vote' component={HowToVote} />
						<Route path='/roadmap' component={Roadmap} />
						<Route path='/grant' component={GrantProgram} />
						<Route path='/proposal' component={WorkerProposal} />
						<Route path='/history' component={History} />


						<Route path='/:language' render={() => <FrontPage landing_page={site_content.landing_page} language={site_content.language} />} />
						<Route path='/' render={() => <FrontPage landing_page={site_content.landing_page} language={site_content.language} />} />
					</Switch>
				</main>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {site_content: state.site_content};
}

export default withRouter(connect(mapStateToProps, null)(ProcessSite));