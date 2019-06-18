import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import foundation_logo from '../../img/foundation_site/logo.png';

import placeholder_portrait from '../../img/foundation_site/nominee_placeholder.png';
import beth from '../../img/foundation_site/beth.png';
import robert_james from '../../img/foundation_site/robert_james.jpg';
import jan_smit from '../../img/foundation_site/Jan Smit.jpg';
import jesse_schulman from '../../img/foundation_site/Jesse Schulman.jpg';
import richard_erikodi from '../../img/foundation_site/Richard Bryan Erikodi.jpg';
import jim_hewitt from '../../img/foundation_site/JimHewitt.jpg';
import mark_cohen from '../../img/foundation_site/mark_cohen.png';
import justin_giudici from '../../img/foundation_site/Justin Giudici.jpg';

import '../../styles/board.css';

const interimNominees = [
	{
		name: 'Jan Smit',
		organization: 'DutchEOS',
		nominatedBy: 'Douglas Horn, GoodBlock',
		portrait: jan_smit,
		bio: [
			'Jan is a respected member of the Telos Contributors Group. DutchEOS was one of the original 12 organizations who participated in the Telos announcement. Since that time, Jan has contributed to several working groups and visibly represented Telos at the London Hackathon and blockchain conference in September, along with the rest of the DutchEOS team. Jan has a background in investing and has agreed to be bound by the trading restrictions regarding secrecy and trading TLOS RAM on his own account or that of his organization while serving as the RAM Administration Director. He has demonstrated progressive and thoughtful ideas about the subject of resource management in Telos and has proven himself to be diligent contributor to the Telos community. I believe Jan will make an excellent RAM Administration Director to guide us through the launch of the Telos Blockchain Network.'
		]
	}
];

const boardNominees = [
	{
		name: 'Mark Cohen',
		organization: 'Telos Vancouver',
		portrait: mark_cohen,
		nominatedBy: 'Richard Bryan, TelosDAC',
		bio: [
			'For more than a decade, Mark has helped build, deploy, and manage the technical infrastructure and security practices for a wide variety of organizations.',
			'Mark is an “inclusionist”; passionate about community, decentralized governance, and making space for dissenting voices.',
			'As a valued member of the Telos Contributors Group, Mark chairs the Onboarding workgroup, and actively contributes to the Governance, Network Maintenance, and Marketing and Social Media workgroups. He has spent countless hours helping facilitate conversations and share resources across the many various Telos working groups, to help bring about consensus.',
			'Mark has also spearheaded much of the public facing technical documentation, authoring articles for the Telos Foundation Wiki, so as to educate and empower Telos Block Producers, through the sharing of knowledge and best practices.',
			'Mark is the Head of Operations and Security at Telos Vancouver, Telos Block Producer candidates, and one of the original organizations who participated in the Telos announcement.'
		],
		linkedIn: 'https://www.linkedin.com/in/mark-cohen'
	},
	{
		name: 'Richard Bryan Erikodi',
		organization: 'Telos DAC',
		nominatedBy: 'Justin Giudici, infinitybloc',
		portrait: richard_erikodi,
		bio: [
			'Richard (closest friends call him Bryan) is an open source, IoT and tech enthusiast.  He holds a BSc Hons in Accounting and Management Information Systems. Over the last 22 years, Bryan has held positions at various FTSE 100 organisations and will be looking to foster good relations between the Telos blockchain and the corporate world.  Bryan is passionate about community and economic mobility.   The decentralised economy will promote this by offering a unique opportunity to develop new organisational & ownership structures as well as new economic activities.',
			'Bryan brings a wealth of organisational & treasury management, financial analysis and reporting expertise to the team.  He is currently researching and developing a standard for financial reporting and audit for blockchain organisations, DAOs and DACs in this age of radical transparency.'
		]
	},
	{
		name: 'Beth Farnham',
		organization: 'GoodBlock',
		nominatedBy: 'Arjen Kruithof, DutchEOS',
		portrait: beth,
		bio: [
			'Beth has been the chair and driving force for many groups. We specifically think of the Telos marketing / social media group, the exchange outreach group and the translations group. In the past she has served on the boards of a number of charity / non-profit organizations. We feel her organizational and leadership skills would be a welcome addition to the board.'
		]
	},
	{
		name: 'Justin Giudici',
		organization: 'infinitybloc',
		nominatedBy: 'Rob Konsdorf',
		portrait: justin_giudici,
		bio: [
			'Justin is the founder and CEO of infinitybloc.io, a founding partner and block producer on Telos. He is highly experienced in this space, having assisted a number of top block producers before and after the first EOSIO chain launched. He is a well respected community member within both Telos and the broader EOSIO community.',
			'He  appears on a weekly tokenomics crowdcast interviewing and reviewing top EOSIO dapps. And runs regular meetup sessions to educate and incubate blockchain talent in San Francisco and Silicon Valley.',
			'Justin led the Telos dapp outreach program pre launch and helped to deliver an impressive list of tools, wallets and dapps expected to be available from early in the chains existence. If elected, Justin will be able to continue to bring top talent to Telos and champion the needs of the networks community above all else.'
		]
	},
	{
		name: 'Jim Hewitt',
		organization: 'EOS UK',
		nominatedBy: 'Jan Smit, DutchEOS',
		portrait: jim_hewitt,
		bio: [
			'Jim has been the chair of the main weekly Telos Launch Group meetings and an invaluable contributor to the governance working group. In addition we feel that his unique backround will be an asset to the board. Before joining EOS UK, Jim was an assistant head teacher and for the last 3 years he has managed the operations of an internet consulting practice. Jim majored in history with a focus on the industrial revolution and we expect him to be a driving force behind this "new" industrial revolution.'
		]
	},
	{
		name: 'Robert James, CEP, CECP',
		organization: 'Echelon Compensation Partners',
		portrait: robert_james,
		nominatedBy: 'Rob Konsdorf, EOS Detroit',
		bio: [
			'Rob is a co-founding Partner at Echelon Compensation Partners, an independent compensation and corporate governance consulting firm located in Southern California.',
			'At Echelon, Rob serves as a trusted advisor to Boards and senior management of public and privately-held businesses. He is a recognized expert on the strategy and financial structure of incentive plans, possessing in-depth knowledge of governance, regulatory compliance, SEC disclosure and tax considerations. Rob is also a Certified Executive Compensation Professional, Certified Equity Professional and holds Series 7 and Series 66 securities licenses.',
			'Rob has assisted Telos in the development of the Bounty System by providing guidance on competitive market compensation rates for Telos contributors. Rob remains an active member of the Telos, EOS and cryptoasset communities having discovered blockchain in in late 2016.'
		]
	},
	{
		name: 'Jesse Schulman',
		organization: 'CalEOS',
		nominatedBy: 'Josep Rosich, EOS Barcelona',
		portrait: jesse_schulman,
		bio: [
			'Jesse is an early member of the Telos Launch Group and has made a big impact as co-chair of the network maintenance group.  He is focused on the technical side of things, and has made contributions across the board such as authoring and implementing the TIP3 snapshot contract as well as helping many new BPs learn the nuances of eosio software and what it takes to get up and running on the testnet.  As co-founder of CalEOS.io, he along with his partner Don will be block producer candidates on the Telos network running their own self-funded bare metal infrastructure, they are working to learn and share as much as possible about tuning the eosio software for optimal performance, making sure users of the Telos network are billed as little CPU as possible for their transactions.'
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
			<InterimNominees />
			<ExecutiveNominees />
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
							<h1>The <strong>Telos</strong> Foundation</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='intro_content'>
							<p>The Telos Foundation is an apolitical body with a mission of promoting the Telos Blockchain Network. It is voted as a decentralized autonomous organization (DAO) voted by holders of Telos Foundation Voting Tokens as described in its governance document.</p>
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
							<p>The Telos Foundation is governed by a board of elected board members who will elect an Executive Director and a RAM Administration Director.</p>
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
											selfNominated={nom.selfNominated}
											nominatedBy={nom.nominatedBy}
											linkedIn={nom.linkedIn} />
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
											portrait={nom.portrait}
											organization={nom.organization}
											bio={nom.bio}
											selfNominated={nom.selfNominated}
											nominatedBy={nom.nominatedBy}
											linkedIn={nom.linkedIn} />
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
			return <h4>{props.name}</h4>;
		}
		return <h4>{props.name}, {props.organization}</h4>;
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

export default Board;
