import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import foundation_logo from '../../img/foundation_site/logo.png';

import '../../styles/worker_proposal.css';

const WorkerProposal = () => {
	return (
		<div className="proposal_container">
			<ScrollAnimation
				animateOnce
				animateIn='fadeIn'
				duration={0.4}
			>
			<ProposalContent/>
			</ScrollAnimation>

		</div>
	);
};

const ProposalContent = () => {
	return (
		<section id='proposal_content'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='intro_logo_container'>
							<h1>Telos Worker Proposal System</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='proposal_content'>
                            <p>When the Telos Blockchain launched, the founders of the chain knew that they would have to create a mechanism by which the chain could raise funds to support its continued growth and development.  </p>
                            <p>The Worker Proposal System (WPS) was created to address that need.</p>
                            <p>The WPS is the mechanism that allows holders of the TLOS Token to select and fund projects that will benefit the Telos Network. Projects are selected for funding by Token holders who vote using a wallet that supports WPS voting. When a project meets the required voting thresholds at the end of the cycle, it is automatically funded through the smart contract. Funding for the WPS was established through code at launch to be funded by inflation at the rate of 1.5%. Any person or team can apply to have their project funded by the Telos blockchain. To learn more about submitting a WP for possible funding, please read this detailed Medium article, <a href="https://medium.com/goodblock-io/telos-user-guide-tutorial-worker-proposals-b9b5f422ef08">“The Telos User Guide - Worker Proposals”</a>. </p>
                            <p>We encourage you to participate in these worker proposals to make your voice heard in the governance of this blockchain. Please vote responsibly.</p>
                        </div>
                        <div className='proposal_content'>
                            <p className='row_header'>What Can Be Funded?</p>
                            <p>There are virtually no rules or barriers to submitting a worker proposal. The Telos Blockchain believes that anyone should be able to pitch their ideas to the chain and have those ideas voted on in a transparent, timely manner. </p>
                            <p>With that in mind, be aware that your proposal will best be received if it is crafted in a way that clearly and concisely explains how it will benefit the Telos ecosystem. When voters look at the proposals asking for funding, they are most likely to vote for projects that resonate with their personal values and promise to improve the chain in some manner. Examples of worker proposals that might be alluring to voters include, but are not limited to: </p>
                        <ul>
							<li>Bug bounties</li>
							<li>Marketing initiatives</li>
                            <li>Applications</li>
                            <li>Enterprise solutions</li>
                            <li>Base code and improvements</li>
					    </ul>
                            <p>If you would like to see the worker proposals that are currently being funded, <a href="https://chainspector.io/dashboard/worker-proposals">Chainspector.io</a> provides an easy to use interface that lists all the current worker proposals and their status within the community. </p>
                            <p>Additionally, the Sqrl Wallet v1.0.6 and above (download available on our <a href="/downloads">resources page</a>) provides detailed information on Worker Proposals as well as the best voting interface for multi-cycle worker proposals. </p>
                        </div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

export default WorkerProposal;
