import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import foundation_logo from '../../img/foundation_site/logo.png';

import placeholder_portrait from '../../img/foundation_site/nominee_placeholder.png';
import suvi_rinkinen from '../../img/foundation_site/Suvi.jpg';
import beth_farnham from '../../img/foundation_site/beth.png';
import robert_james from '../../img/foundation_site/robert_james.jpg';
import jan_smit from '../../img/foundation_site/Jan Smit.jpg';
import jesse_schulman from '../../img/foundation_site/Jesse Schulman.jpg';
import richard_erikodi from '../../img/foundation_site/Richard Bryan Erikodi.jpg';
import jim_hewitt from '../../img/foundation_site/JimHewitt.jpg';
import mark_cohen from '../../img/foundation_site/mark_cohen.png';
import justin_giudici from '../../img/foundation_site/Justin Giudici.jpg';
// import daniel_uzcategui from '../../img/foundation_site/Justin Giudici.jpg';
import adam_zientarski from '../../img/foundation_site/Adam Zientarski.png';
import rory_mapstone from '../../img/foundation_site/Rory_Mapstone.jpg';

import '../../styles/board.css';

const interimNominees = [
	{
		name: 'Jan Smit',
		organization: 'DutchEOS',
		elected: '(appointed pre-network launch)',
		portrait: jan_smit,
		bio: [
			'Jan is a respected member of the Telos Contributors Group. DutchEOS was one of the original 12 organizations who participated in the Telos announcement.'
		]
	}
];

const execNominees = [
	{
		name: 'Suvi Rinkinen: President',
		elected: '(Elected April 15, 2019)',
		portrait: suvi_rinkinen,
		bio: [
			'Suvi was elected President in April 2019, after serving on the board as a Telos Foundation Advisory Board member. Suvi brings her extensive business development expertise to the Foundation, with a focus on expanding relationships with exchanges and businesses.','Suvi is an experienced business development consultant with strong business acumen. She has been working full time in the technology space since 2017, with blockchain based projects being of particular interest to her. Suvi previously worked in the fintech industry specializing in payment and remittance technology. Utilizing her vast network, she regularly assists early stage companies in fundraising and establishing investor relations.'
		]	
	},
	{
		name: 'Richard Bryan Erikodi: Treasurer',
		elected: '(Elected Dec 24, 2018)',
		portrait: richard_erikodi,
		bio: [
			'Richard (closest friends call him Bryan) is an open source, IoT and tech enthusiast. He holds a BSc Hons in Accounting and Management Information Systems. Over the last 22 years, Bryan has held positions at various FTSE 100 organisations and is working to foster good relations between the Telos blockchain and the corporate world. Bryan is passionate about community and economic mobility. Bryan brings a wealth of organisational & treasury management, financial analysis and reporting expertise to the team. '
		]
	},
];

const boardNominees = [
	{
		name: 'Robert James, CEP, CECP',
		organization: 'Echelon Compensation Partners',
		elected: '(Elected Dec 24, 2018)',
		portrait: robert_james,
		bio: [
			'Rob serves as a trusted advisor to Boards and senior management of public and privately-held businesses. Rob is a recognized expert on the strategy and financial structure of incentive plans, possessing in-depth knowledge of governance, regulatory compliance, SEC disclosure and tax considerations. Rob is also a Certified Executive Compensation Professional, Certified Equity Professional and holds Series 7 and Series 66 securities licenses.',
			'Rob assisted Telos in the development of the Bounty System providing guidance on competitive market compensation rates for Telos contributors. '
		]
	},
	{
		name: 'Justin Giudici',
		organization: 'infinitybloc',
		elected: '(Elected Dec 24, 2018)',
		portrait: justin_giudici,
		bio: [
			'Justin is highly experienced in the Blockchain space, having assisted a number of top block producers before and after the first EOSIO chain launched. He is a well respected community member within both Telos and the broader EOSIO community. He appears on a weekly tokenomics crowdcast interviewing and reviewing top EOSIO dapps. Justin leads the Telos dapp outreach working group and is always actively working to get developers to build on Telos.'
		]
	},
	{
		name: 'Jim Hewitt',
		organization: 'EOS UK',
		elected: '(Elected Dec 24, 2018)',
		portrait: jim_hewitt,
		bio: [
			'Jim was the first President of the TF.  Jim now leads the Events working group and is responsible for Telos being represented outside the eosio bubble. Before discovering the world of blockchain Jim was an assistant head teacher and has managed the operations for an internet consulting practice.  Jim was also involved in the drafting of the Telos Blockchain Network Agreement (TBNOA)'
		]
	},
	{
		name: 'Jesse Schulman',
		organization: 'CalEOS',
		elected: '(Elected Dec 24, 2018)',
		portrait: jesse_schulman,
		bio: [
			'Jesse was an early member of the Telos Launch Group and has made a big impact as co-chair of the network maintenance group. Jesse is focused on the technical side of things, and has made contributions across the board such as authoring and implementing the TIP3 snapshot contract as well as helping many new BPs learn the nuances of eosio software and what it takes to get up and running on the testnet. '
		]
	},
	{
		name: 'Daniel Uzcategui',
		organization: 'Telos Venezuela',
		elected: '(Elected April 15, 2019)',
		portrait: placeholder_portrait,
		bio: [	'Daniel is an experienced Database Administrator (DBA) with 7 years of experience designing, coding, testing and supporting next-generation FINANCE application/database solutions in Fusion Middleware Oracle and SQL Server environments.  Daniel is a crypto enthusiast and miner since 2010, later involved in the Telos launch group. Backed up the team by testing the Telos smart contracts implementations, creator of multiple launch scripts for horizontal azure Telos environments, joined the ABP Telos team to help launch the Telos Network by editing and creating multiple validation scripts.'

		]
	},
	{
		name: 'Adam Zientarski',
		organization: 'EOS Detroit',
		elected: '(Elected April 15, 2019)',
		portrait: adam_zientarski,
		bio: [	
			'Adam was an active member of the Telos Launch Group and has already contributed to improving the transparency of the Telos Foundation by authoring and successfully passing TIP-12, a proposal to have Telos Foundation pay proposed and voted on separately from Telos Foundation budgets by Telos Foundation Voting Token holders.  Adam played a vital role in the drafting of the TBNOA and now takes the lead in the arbitration working group for the foundation.'
		]
	},
	{
		name: 'Rory Mapstone',
		elected: '(Elected April 15, 2019)',
		portrait: rory_mapstone,
		bio: [	
			'Rory is passionate about the potential of Telos as a governed eosio community blockchain is actively promoting the adoption of Telos as the eosio chain of choice in Southern Africa, with current efforts focused on building awareness and access to token.  Rory is active in the exchange working group helping the TF deal with exchanges and promoting TLOS to the community.'
		]
	},
];

const Board = () => {
	return (
		<div className='board'>
			<ScrollAnimation
				animateOnce
				animateIn='fadeIn'
				duration={0.4}
			>
			<BoardIntro />
			</ScrollAnimation>
			<ExecutiveNominees />
			<BoardNominees />
			<InterimNominees />
			<Appendix />

		</div>
	);
};

const BoardIntro = () => {
	return (
		<section id='board_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='intro_logo_container'>
							<img src={foundation_logo} alt='telos foundation logo' />
							<h1>About the <strong>Telos</strong> Foundation</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='intro_content'>
							<p>The Telos Foundation (TF) is an apolitical organization with a mission to aid in the promotion and improvement of the Telos Network. The TF seeks to do this in three distinct ways:</p>
							<ul>
								<li>Promoting the network through grants and administration to advertise, market, engage in social media, live events, and teaching opportunities that raise the profile and inform and expand the user-base.
								</li>
								<br/>
								<li>Underwriting expenses that increase the functionality of the Telos Network outside the Worker Proposal System.
								</li>
								<br/>
								<li>Maintaining a published guidance price for Telos Network RAM and both trading based on this price and offering sales at this price to qualified developers. when the market price for RAM is more than 10% above the published guidance price. Advise BPs of adhoc and/or gradual RAM increases.
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const InterimNominees = () => {
	return (
		<section id='interim_nominees'>
			<header>
				<h2>Interim RAM Administration Director</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<ScrollAnimation
							animateOnce
							animateIn='fadeInUp'
							duration={0.4}
						>
							<p className='interim_intro'>The Telos Foundation Interim RAM Administration Director manages the Telos Foundation{"'"}s efforts to stabilize the Telos RAM market by publishing a Published Guidance Price and non-binding Advice to Block Producers regarding future RAM releases.</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce
							animateIn='fadeInUp'
							duration={0.4}
						>
							{
								interimNominees.map((nom, i) => {
									return (
										<Nominee
											key={i}
											name={nom.name}
											portrait={nom.portrait}
											organization={nom.organization}
											bio={nom.bio}
											elected={nom.elected}
											/>
									);
								})
							}
						</ScrollAnimation>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const ExecutiveNominees = () => {
	return (
		<section id='executive_nominees'>
			<header>
				<h2>Executive Board</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						{
							execNominees.map((nom, i) => {
								return (
									<ScrollAnimation
										key={i}
										animateOnce
										animateIn='fadeInUp'
										duration={0.4}
									>
										<Nominee
											name={nom.name}
											elected={nom.elected}
											portrait={nom.portrait}
											bio={nom.bio}
										/>
									</ScrollAnimation>
								);
							})
						}
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const BoardNominees = () => {
	return (
		<section id='executive_nominees'>
			<header>
				<h2>Board Members</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						{
							boardNominees.map((nom, i) => {
								return (
									<ScrollAnimation
										key={i}
										animateOnce
										animateIn='fadeInUp'
										duration={0.4}
									>
										<Nominee
											name={nom.name}
											elected={nom.elected}
											portrait={nom.portrait}
											organization={nom.organization}
											bio={nom.bio}
											/>
									</ScrollAnimation>
								);
							})
						}
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Nominee = (props) => {

	const getLinkedIn = () => {
		if(props.linkedIn) return (
			<p>
				LinkedIn: <a href={props.linkedIn} target='_blank' rel='noopener noreferrer'>{props.linkedIn}</a>
			</p>
		);
	};

	const getName = () => {
		if(!props.organization){
			return <React.Fragment><h4>{props.name}</h4><h5>{props.elected}</h5></React.Fragment>;
		}
		return <React.Fragment><h4>{props.name}, {props.organization}</h4><h5>{props.elected}</h5></React.Fragment>;
	}

	return (
		<div className='nominee'>
			<div className='nominee_img_container'>
				<img src={props.portrait ? props.portrait : placeholder_portrait} alt='' />
			</div>
			<div className='nominee_description'>
				{getName()}
				{props.bio.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
				{/*getNominatedBy()*/}
				{getLinkedIn()}
			</div>
		</div>
	);
};

const Appendix = () => {
	return (
		<section id='board_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='intro_logo_container'>
							<h1>Appendix:</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='intro_content'>				
							<div className='text-center'>
								<a
									href='https://resources.telosfoundation.io/Telos Foundation Governance.pdf'
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-primary'
								>
									TELOS FOUNDATION GOVERNANCE DOCUMENT
								</a>
							</div>
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

export default Board;
