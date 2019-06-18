import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link, withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import Slider from '../slider/slider';
import {selectLanguage} from '../../actions';

import icon_dapps from '../../img/Telos_MarketingSite_Icon_dapps_200px.png';
import icon_dpos from '../../img/Telos_MarketingSite_Icon_dpos_200px.png';
import icon_governance from '../../img/Telos_MarketingSite_Icon_governance_200px.png';

import chainrift_button from '../../img/exchange_logos/Chainrift-Button.jpg';
import codex_button from '../../img/exchange_logos/codex_button.jpg';
import akdex_button from '../../img/exchange_logos/akdex.png';
import p2pb2b_button from '../../img/exchange_logos/P2PPB2B-Button.jpg';
import cointiger_button from '../../img/exchange_logos/CoinTiger-Button.jpg';
import newdex_button from '../../img/exchange_logos/NewDexLogo.png';
import abcc_button from '../../img/exchange_logos/abcc.png';

import sqrl_logo from '../../img/SQRL_Logo_1024px1.png';
import scatter_logo from '../../img/scatter_logo.jpg';
import awake_logo from '../../img/awake_wallet_banner.png';
import meow_logo from '../../img/meow_wallet_banner.png';
import torus_logo from '../../img/torus_wallet.png';
import eoslynx_logo from '../../img/EOSLynxLogo.png';
import myteloswallet_logo from '../../img/my_telos_wallet.png';

import carbon_logo from '../../img/stable_coin/CarbonLogo.png';
import math_logo from '../../img/app_icon_rounded_1024.png';

import splash_expo from '../../img/banners/SplashBanner_BlockchainExpo.png';
import splash_hacker from '../../img/banners/SplashBanner_ReadyHackerOne.png';
import splash_exchange from '../../img/banners/SplashBanner_Exchange.png';
import splash_wallets from '../../img/banners/SplashBanner_Wallets.jpg';
import splash_enterprise from '../../img/banners/SplashBanner_Enterprise.png';


import '../../styles/front_page.css';

const exchangesArr = [
	{
		name: 'chainrift',
		img: chainrift_button,
		url: 'https://chainrift.com'
	},
	{
		name: 'codex',
		img: codex_button,
		url: 'https://codex.one'
	},
	{
		name: 'akdex',
		img: akdex_button,
		url: 'https://akdex.io'
	},
	{
		name: 'p2pb2b',
		img: p2pb2b_button,
		url: 'https://p2pb2b.io'
	},
	{
		name: 'cointiger',
		img: cointiger_button,
		url: 'https://www.cointiger.com/en-us'
	},
	{
		name: 'newdex',
		img: newdex_button,
		url: 'https://newdex.io'
	},
	{
		name: 'abcc',
		img: abcc_button,
		url: 'https://abcc.com'
	}
];

const slidesArr = [
	{
		img: splash_expo,
		heading: 'Blockchain Expo EUROPE 2019',
		paragraphs: [
			'Come visit the Telos Foundation at booth #289 on June 19-20, 2019 in Amsterdam.',
			'Demo both the power and depth of Telos, and deep dive into what Telos can do for you.'
		],
		url: 'https://blockchain-expo.com/europe/'
	},
	{
		img: splash_hacker,
		heading: 'Ready Hacker One',
		paragraphs: [
			'Use the power of Telos and EOSIO to enhance a new or pre-existing game. The game can be simple or complex, the key is how you use blockchain to make gaming engaging and fun!',
			'June 30th 2019 - Submissions Close',
			'readyhackerone.telosfoundation.io'
		],
		url: 'https://readyhackerone.telosfoundation.io'
	},
	{
		img: splash_exchange,
		heading: 'Exchange Listings',
		paragraphs: [
			'TLOS is now listed on ABCC Exchange! Both TLOS/USDT and TLOS/BTC pairs available.',
			'TLOS is now listed on CoinTiger! TLOS/USDT pairs are available.'
		],
		url: '#exchanges'
	},
	{
		img: splash_wallets,
		heading: 'Telos Wallets',
		paragraphs: [
			'Store your TLOS tokens.'
		],
		url: '/downloads'
	},
	{
		img: splash_enterprise,
		heading: 'Enterprise Business Solutions',
		paragraphs: [
			'Telos meets the need for trustless computing for enterprise.'
		],
		url: 'https://enterprise.telosfoundation.io/'
	}
];

class FrontPage extends Component {
	componentDidMount(){
		window.scrollTo(0, 0);

		if(this.props.match.params.language){
			this.props.selectLanguage(this.props.match.params.language);
		}
	}

	getStyle(){
		if(this.props.language === 'arabic') return {direction: 'rtl'};
		return {};
	}

	render(){
		const { intro_heading,
				intro_content,
				developers_heading,
				developers_content,
				dpos_heading,
				dpos_content,
				gov_heading,
				gov_content } = this.props.landing_page;
		const {language} = this.props;

		return (
			<div style={this.getStyle()}>
				<Intro
					intro_heading={intro_heading}
					intro_content={intro_content}
					language={language} />
				<IconsText
					developers_heading={developers_heading}
					developers_content={developers_content}
					dpos_heading={dpos_heading}
					dpos_content={dpos_content}
					gov_heading={gov_heading}
					gov_content={gov_content} />
				<Exchanges />
				<StableCoin />
				<Wallets />
			</div>
		);
	}
}

const Intro = () => {
	return (
		<section id='front_page_intro'>
			<Slider
				slides={slidesArr}
			/>
		</section>
	);
};

const IconsText = ({developers_heading, developers_content, dpos_heading, dpos_content, gov_heading, gov_content}) => {
	return (
		<section id='front_page_icons'>
			<Grid>
				<Row>
					<Col sm={4}>

						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeInUp'
							duration={0.4}>
							<img src={icon_dapps} alt="dapps" className='img-responsive front_page_icons_img' />
							<div className='icons_text'>
								<h2>{developers_heading}</h2>
								<p>{developers_content}</p>
							</div>
						</ScrollAnimation>
					</Col>
					<Col sm={4}>

						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeInUp'
							duration={0.4}
							delay={250}>
							<img src={icon_dpos} alt="dpos" className='img-responsive front_page_icons_img' />
							<div className='icons_text'>
								<h2>{dpos_heading}</h2>
								<p>{dpos_content}</p>
							</div>
						</ScrollAnimation>

					</Col>
					<Col sm={4}>
	
						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeInUp'
							duration={0.4}
							delay={500}>
							<img src={icon_governance} alt="governance" className='img-responsive front_page_icons_img' />
							<div className='icons_text'>
								<h2>{gov_heading}</h2>
								<p>{gov_content}</p>
							</div>
						</ScrollAnimation>

					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Exchanges = () => {
	return (
		<section id='exchanges'>
			<header>
				<h1>Participating Exchanges</h1>
			</header>
			<div className='exchange_intro' style={{direction: 'ltr'}}>
				<Grid>
					<Row>
						<Col md={8} mdOffset={2}>
							<ScrollAnimation
								animateOnce={true}
								animateIn='fadeInUp'
								duration={0.4}
							>
								<p>Buy, sell and trade TLOS, the native token of the Telos network on these exchanges. Check back often for new exchange partnerships!</p>
							</ScrollAnimation>
						</Col>
					</Row>
				</Grid>
			</div>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='exchange_buttons'>
							{exchangesArr.map((ex, i) => {
								return (
									<Exchange
										key={i}
										name={ex.name}
										img={ex.img}
										url={ex.url}
										delay={i * 100 + 150} />
								);
							})}
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Exchange = (props) => {
	return (
			<div className='exchange_button'>
				<ScrollAnimation
					animateOnce={true}
					animateIn='fadeInUp'
					duration={0.5}
					delay={props.delay}
				>
					<a
						href={props.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={props.img} alt={props.name} />
					</a>
				</ScrollAnimation>
			</div>
	);
};

const StableCoin = () => {
	return (
		<section id='stable_coin'>
			<header>
				<h1>Stable Coin</h1>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='stable_coin_buttons'>
							<div className='stable_coin_button'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.5}
								>
									<a
										href='https://www.carbon.money'
										target='_blank'
										rel='noopener noreferrer'
									>
										<img src={carbon_logo} alt='carbon' />
									</a>
								</ScrollAnimation>
							</div>
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Wallets = () => {
	return (
		<section id='wallets' style={{direction: 'ltr'}}>
			<header>
				<h1>Telos Wallets</h1>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='wallet_intro'>
							<ScrollAnimation
								animateOnce
								animateIn='fadeInUp'
								duration={0.4}
							>
								<p style={{marginBottom: 0}}>Store and retrieve your TLOS tokens on these wallets.</p>
							</ScrollAnimation>
							<ScrollAnimation
								animateOnce
								animateIn='fadeInUp'
								duration={0.4}
								delay={125}
							>
								<p>Check back often for new wallet partnerships!</p>
							</ScrollAnimation>
						</div>
						<div className='wallet_banners'>
							<div className='wallet_banner'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={250}
								>
									<div className='wallet_img_container sqrl_banner_container'>
										<Link to='/downloads'>
											<img src={sqrl_logo} alt='sqrl wallet' />
										</Link>
									</div>
								</ScrollAnimation>
							</div>
							<div className='wallet_banner'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={375}
								>
									<div className='wallet_img_container scatter_banner_container'>
										<a
											href='https://get-scatter.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img src={scatter_logo} alt='scatter logo' />
										</a>
									</div>
								</ScrollAnimation>
							</div>
							<div className='wallet_banner'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={500}
								>
									<div className='wallet_img_container closed_source meow_banner_container'>
										<a
											href='https://altshiftdev.com/telos'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img src={meow_logo} alt='alt shift logo' />
										</a>
									</div>
								</ScrollAnimation>
							</div>
							<div className='wallet_banner'>			
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={625}
								>
									<div className='wallet_img_container closed_source awake_banner_container'>
										<a
											href='https://www.pgyer.com/awake'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img src={awake_logo} alt='awake logo' />
										</a>
									</div>
								</ScrollAnimation>
							</div>
							<div className='wallet_banner'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={750}
								>
									<div className='wallet_img_container closed_source torus_banner_container'>
										<a
											href='http://kibisis.ch'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img src={torus_logo} alt='torus logo' />
										</a>
									</div>
								</ScrollAnimation>
							</div>
							<div className='wallet_banner'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={875}
								>
									<div className='wallet_img_container closed_source eos_lynx_banner_container'>
										<a
											href='https://eoslynx.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img src={eoslynx_logo} alt='eos lynx logo' />
										</a>
									</div>
								</ScrollAnimation>
							</div>
							<div className='wallet_banner'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={1000}
								>
									<div className='wallet_img_container closed_source my_telos_wallet_banner_container'>
										<a
											href='https://myteloswallet.one'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img src={myteloswallet_logo} alt='my telos wallet logo' />
										</a>
									</div>
								</ScrollAnimation>
							</div>
							<div className='wallet_banner'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={1125}
								>
									<div className='wallet_img_container closed_source math_banner_container'>
										<a
											href='https://www.mathwallet.org'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img src={math_logo} alt='math logo' />
										</a>
									</div>
								</ScrollAnimation>
							</div>
						</div>

						<footer>
							<ScrollAnimation
								animateOnce
								animateIn='fadeInUp'
								duration={0.4}	
							>
								<p>* These closed-source applications have not been thoroughly tested by the Telos Foundation</p>
							</ScrollAnimation>
						</footer>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

export default withRouter(connect(null, {selectLanguage})(FrontPage));
