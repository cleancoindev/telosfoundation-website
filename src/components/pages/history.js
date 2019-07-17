import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import foundation_logo from '../../img/foundation_site/logo.png';
import history_timeline_sm from '../../img/charts/timeline_sm.png';
import history_timeline_lg from '../../img/charts/timeline_lg.png';
import ModalImage from 'react-modal-image';

import '../../styles/history.css';

const History = () => {
	return (
		<div>
			<ScrollAnimation
				animateOnce
				animateIn='fadeIn'
				duration={0.4}
			>
			<HistoryContent/>
			</ScrollAnimation>

		</div>
	);
};

const HistoryContent = () => {
	return (
		<section id='history_content' className='history_container'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='intro_logo_container'>
							<img src={foundation_logo} alt='telos foundation logo' />
							<h1><strong>Telos</strong> History</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='history_content'>
                        	<p>The Telos Foundation was initially conceived and founded by more than 120 volunteers known collectively as the Telos Launch Group (TLG).  The intent was to create a neutral organization that would promote the growth of the Telos Blockchain Network and fund grants for worthy projects that would contribute to the network and not otherwise funded.  Prior to launch and in addition to a huge technical undertaking (see the <a href="https://telosfoundation.io/launch">launch checklist</a>), the TLG also created branding, a website with information for block producers and application developers, an electronic press kit, official downloads of various resources and an explorer for the testnet and eventually the Telos Main Network.</p>
                            <p>Members of the Telos Launch Group were granted Telos Foundation Voting Tokens which are non-fungible tokens for the purpose of voting on internal Telos Foundation initiatives and board member elections.  </p>
                            <p>Following activation of the Telos Mainnet in December 2018, the first board election took place on chain, with the election of 12 members elected to the working board. The next few months were dedicated to establishing the foundations legal entity and by-laws. This was alongside the board’s concentrated efforts to get the TLOS token listed on at least three Coin Market Cap Exchanges.  </p>
                            <p>In the first quarter of 2019 Telos had many “firsts” including:</p>
                            <ul>
								<li>The first Ethereum to Telos token teleport with the Qubicles application</li>
								<li>The first game launch on Telos with EOSPlaystation</li>
								<li>The first Arbitrator Election</li>
                                <li>Listing on CoinGecko</li>
                                <li>EDNA began teleporting to Telos</li>
                                <li>The ProveAccount security feature for token holder protections</li>
                                <li>TLOS  listing on CMC exchange, P2PB2B</li>
                                <li>The launch of a the learning UBI type token known as Acorn</li>
                                <li>The first ever Worker Proposal System launched on an EOSIO blockchain</li>
							</ul>
                            <br></br>
                            <p>Q2 was ushered in with the first worker proposals passing, listing on CoinTiger and Newdex, multiple new wallets and Vapaée, the first Telos DEX, live launched with development supported by the Telos WPS.  Telos Foundation also introduced its monthly grant program and announced the first grant recipient.</p>
						</div>
					</Col>
				</Row>
                <Row>
					<Col md={10} mdOffset={1}>
                        <div className="history_image">
                            <ModalImage
                                small={history_timeline_sm}
                                medium={history_timeline_lg}
                                alt="telos history timeline"                            
                            />
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

export default History;
