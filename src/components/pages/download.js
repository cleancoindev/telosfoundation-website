import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import BannerModal from '../modals/banner_modal';
import {Helmet} from 'react-helmet';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectLanguage} from '../../actions';

import sqrl_logo from '../../img/SQRL_Logo_1024px.png';
import scatter_logo from '../../img/scatter_logo.jpg';
import awake_logo from '../../img/awake_wallet_banner.png';
import meow_logo from '../../img/meow_wallet_banner.png';
import torus_logo from '../../img/torus_wallet.png';

import telos_icon from '../../img/Telos_MarketingSite_TelosIcon_334px.png';

import pdf_img from '../../img/download_pdf_icon.png';
import zip_img from '../../img/download_zip_icon.png';

import banner_one from '../../img/banners/Splash Banner_Telos-Medium_generic_1_display.jpg';
import banner_two from '../../img/banners/Splash Banner_Telos-Medium_generic_2_display.jpg';
import banner_three from '../../img/banners/Splash Banner_Telos-Medium_generic_3_display.jpg';
import banner_four from '../../img/banners/Splash Banner_Telos-Medium_generic_4_display.jpg';
import banner_five from '../../img/banners/Splash Banner_Telos-Medium_generic_5_display.jpg';
import banner_six from '../../img/banners/Splash Banner_Telos-Medium_generic_6_display.jpg';
import banner_seven from '../../img/banners/Splash Banner_Telos-Medium_generic_7_display.jpg';

//white papers
import {
	WHITE_PAPER_ENGLISH,
	WHITE_PAPER_KOREAN,
	WHITE_PAPER_CHINESE,
	WHITE_PAPER_RUSSIAN,
	WHITE_PAPER_PORTUGESE,
	WHITE_PAPER_INDONESIAN
} from '../../config/constants';
import '../../styles/download.css';

const sg_en = 'https://resources.telosfoundation.io/Telos_Style Guide_2018.pdf';
//I don't know whether this will ever get translated
const press_kit_en = 'https://resources.telosfoundation.io/presskit_master/TELOS_press_kit.pdf';
const voting_guide_en = 'https://resources.telosfoundation.io/voting_guide/Telos_Foundation_Board_Voting_Guide.pdf';

const splashBanners = [
	{
		name: 'banner one',
		image: banner_one,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_1.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_1.jpg',
		fileSize: '754 KB'
	},
	{
		name: 'banner two',
		image: banner_two,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_2.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_2.jpg',
		fileSize: '602 KB'
	},
	{
		name: 'banner three',
		image: banner_three,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_3.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_3.jpg',
		fileSize: '330 KB'
	},
	{
		name: 'banner four',
		image: banner_four,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_4.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_4.jpg',
		fileSize: '418 KB'
	},
	{
		name: 'banner five',
		image: banner_five,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_5.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_5.jpg',
		fileSize: '423 KB'
	},
	{
		name: 'banner six',
		image: banner_six,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_6.jpg',
		downloadName: 'Spash Banner_Telos-Medium_generic_6.jpg',
		fileSize: '599 KB'
	},
	{
		name: 'banner seven',
		image: banner_seven,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_7.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_7.jpg',
		fileSize: '864 KB'
	}
];

class Download extends Component {
	componentDidMount(){
		window.scrollTo(0, 0);

		if(this.props.match.params.language){
			this.props.selectLanguage(this.props.match.params.language);
		}
	}

	render(){
		const {language, downloads_page} = this.props;
		return (
			<div className='download_page'>
				<Helmet>
					<title>Telos Downloads</title>
					<meta name="description" content="Download all the documents and tools that you need to join the Telos Network." />
				</Helmet>
				<Grid>
					<Row>
						<Col md={12}>
							<div className='download_intro'>			
								<h1>{downloads_page.intro.heading}</h1>
								<Row>
									<Col md={10} mdOffset={1}>
										<h2>{downloads_page.intro.subheading}</h2>
									</Col>
								</Row>
							</div>
							<Wallets wallets={downloads_page.wallets} />
							<Documents documents={downloads_page.documents} banners={downloads_page.banners} language={language} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

const Wallets = ({wallets}) => {
	const walletsArr = [
		{
			name: 'SQRL',
			description: wallets.sqrl_description,
			logo: sqrl_logo,
			links: {
				linux: 'https://github.com/Telos-Foundation/Sqrl/releases',
				apple: 'https://github.com/Telos-Foundation/Sqrl/releases',
				windows: 'https://github.com/Telos-Foundation/Sqrl/releases',
				github: 'https://github.com/Telos-Foundation/Sqrl'
			}
		},
		{
			name: 'Scatter',
			description: 'Signing transactions on a blockchain can be a daunting task for users. Scatter makes it easy for anyone to do, whether they know about blockchain or not.',
			logo: scatter_logo,
			links: {
				linux: 'https://github.com/GetScatter/ScatterDesktop/releases/',
				apple: 'https://github.com/GetScatter/ScatterDesktop/releases/',
				windows: 'https://github.com/GetScatter/ScatterDesktop/releases/',
				github: 'https://github.com/GetScatter/ScatterDesktop'
			}
		},
		{
			name: 'meow',
			description: 'Access and manage your hardware wallets with My Eos Wallet (MEOW), a sleek and secure cross-chain app by Attic Lab.',
			logo: meow_logo,
			links: {
				download: 'https://altshiftdev.com/telos'
			}
		},
		{
			name: 'awake',
			description: 'The Awake mobile wallet and trading platform, developed by the EosAwake community, supports digital asset management and functions such as node voting.',
			logo: awake_logo,
			links: {
				download: 'https://www.pgyer.com/awake'
			}
		},
		{
			name: 'torus',
			description: 'Fully functional iOS mobile wallet available on Apple TestFlight. Coming soon to the Apple Store.',
			logo: torus_logo,
			links: {
				download: 'http://kibisis.ch'
			}
		}
	];

	return (
		<section id='download_wallets'>
			<h2>{wallets.heading}</h2>
			<hr />
			<Row>
				<Col md={10} mdOffset={1}>					
					<h3>{wallets.subheading}</h3>
				</Col>
			</Row>
			{
				walletsArr.map((wal, i) => {
					return (
						<Wallet
							key={i}
							logo={wal.logo}
							wallets={wallets}
							wallet_name={wal.name}
							wallet_description={wal.description}
							links={wal.links} />
					);
				})
			}
		</section>
	);
}

const Wallet = (props) => {

	const {wallets} = props;

	return (
		<Row>
			<Col sm={5}>
				<img src={props.logo} alt={`${props.wallet_name} wallet logo`} className='wallet_logo' />
			</Col>
			<Col sm={7}> 
				<div className='squirrel_content'>
					<p>{props.wallet_description}</p>
					<ul className='download_buttons'>
						{
							props.links.linux ?
								<li>
									<a
										href={props.links.linux}
										className='btn btn-primary'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fa fa-linux'></i>  {wallets.download}
									</a>
								</li> :
								''
						}
						{
							props.links.apple ?
								<li>
									<a
										href={props.links.apple}
										className='btn btn-primary'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fa fa-apple'></i>  {wallets.download}
									</a>
								</li> :
								''
						}
						{
							props.links.windows ?
								<li>
									<a
										href={props.links.windows}
										className='btn btn-primary'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fa fa-windows'></i>  {wallets.download}
									</a>
								</li> :
								''
						}
						{
							props.links.github ?
								<li>
									<a
										href={props.links.github}
										className='btn btn-primary'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fa fa-github'></i> {wallets.source}
									</a>
								</li> :
								''
						}
						{
							props.links.download ?
								<li>
									<a
										href={props.links.download}
										className='btn btn-primary'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fa fa-download'></i> {wallets.download}
									</a>
								</li> :
								''
						}
						
					</ul>
				</div>
			</Col>			
		</Row>
	);
};

class Documents extends Component {
	constructor(props){
		super(props);
		this.state = {
			downloadModalOpen: false,
			displayBanner: '',
			downloadBanner: '',
			downloadBannerName: '',
			downloadBannerFileSize: ''
		};
	}

	render(){
		const {language, documents, banners} = this.props;

		let wp_url;
		switch(language){
			case 'en':
				wp_url = WHITE_PAPER_ENGLISH;
				break;
			case 'korean':
				wp_url = WHITE_PAPER_KOREAN;
				break;
			case 'mandarin':
				wp_url = WHITE_PAPER_CHINESE;
				break;
			case 'russian':
				wp_url = WHITE_PAPER_RUSSIAN;
				break;
			case 'pt-br':
				wp_url = WHITE_PAPER_PORTUGESE;
				break;
			case 'indonesian':
				wp_url = WHITE_PAPER_INDONESIAN;
				break;
			default:
				wp_url = WHITE_PAPER_ENGLISH;
				break;
		}

		const downloadDocuments = [
			{
				document_type: 'pdf',
				url: wp_url,
				link_text: documents.white_paper.link,
				description: documents.white_paper.description
			},
			{
				document_type: 'pdf',
				url: press_kit_en,
				link_text: documents.press_kit.link,
				description: documents.press_kit.description
			},
			{
				document_type: 'pdf',
				url: sg_en,
				link_text: documents.style_guide.link,
				description: documents.style_guide.description
			},
			{
				document_type: 'pdf',
				url: voting_guide_en,
				link_text: documents.voting_guide.link,
				description: documents.voting_guide.description
			},
			{
				document_type: 'zip',
				url: 'https://resources.telosfoundation.io/Telos_Logos_and_Icons.zip',
				link_text: documents.logos_icons.link,
				description: documents.logos_icons.description
			}
		];

		return (
			<section id='download_documents'>
				<h2>{documents.heading}</h2>
				<hr />
				<Row>
					<Col md={8} mdOffset={2}>
						<div className='documents_wrapper'>
						{
							downloadDocuments.map((doc, i) => {
								if(doc.document_type === 'pdf'){
									return (
										<DownloadDocumentPDF
											url={doc.url}
											link_text={doc.link_text}
											description={doc.description} />
									);
								}else{
									//right now we only have pdf and zip, but might have others in the future.
									return (
										<DownloadDocumentZIP
											url={doc.url}
											link_text={doc.link_text}
											description={doc.description} />
									);
								}
							})
						}
						</div>
						<DownloadBadges />
						<div className='download_banner_container'>
							<div className='download_banner_description'>
								<h3>{banners.heading}</h3>
								<p>{banners.subheading}</p>
							</div>
							<Row>
								{
									splashBanners.map((banner, i) => {
										return (
											<Col sm={6} key={i}>
												<img
													src={banner.image}
													alt={banner.name}
													className='download_banner'
													onClick={e => {
														e.preventDefault();
														this.setState({
															downloadModalOpen: true,
															displayBanner: banner.image,
															downloadBanner: banner.download,
															downloadBannerName: banner.downloadName,
															downloadBannerFileSize: banner.fileSize
														});
													}} />
											</Col>
										);
									})
								}
							</Row>
						</div>
					</Col>
				</Row>
				<BannerModal
					show={this.state.downloadModalOpen}
					display_banner={this.state.displayBanner}
					download_banner={this.state.downloadBanner}
					download_banner_name={this.state.downloadBannerName}
					download_banner_file_size={this.state.downloadBannerFileSize}
					onHide={() => this.setState({downloadModalOpen: false})} />
			</section>
		);
	}
}

const DownloadDocumentPDF = (props) => {
	return (
		<div className='download_document_container'>
			<div className='download_document'>
				<a href={props.url} target='_blank' rel='noopener noreferrer'>{props.link_text}</a>
				<p>{props.description}</p>
			</div>
			<a href={props.url} target='_blank' rel='noopener noreferrer'>
				<img src={pdf_img} alt='pdf download icon' className='download_icon' /> 
			</a>
		</div>
	);
};

const DownloadDocumentZIP = (props) => {
	return (
		<div className='download_document_container'>
			<div className='download_document'>
				<a href={props.url}>{props.link_text}</a>
				<p>{props.description}</p>
			</div>
			<a href={props.url}>
				<img src={zip_img} alt='zip download icon' className='download_icon' />
			</a>
		</div>
	);
};

const DownloadBadges = () => {
	return (
		<div className='telos_badges'>
			<heading className='telos_badge_heading'>
				<h3>Telos Foundation Support Badges</h3>
				<p>Projects funded by Telos Worker Proposals should consider acknowledging the Telos voters who helped make these projects possible. Please consider adding one of these images to your project website with a link to <a href='https://telosfoundation.io'>telosfoundation.io</a>.</p>
			</heading>
			<div className='badge_section_wrapper'>
				<h4>Funded/Supported by Telos Work Proposals Badges</h4>
				<DownloadBadge label='Supported by Telos Work Proposals' file='' file='Supported by Telos Work Proposals.zip' />
				<DownloadBadge label='Funded by Telos Work Proposals' file='Funded by Telos Work Proposals.zip' />
			</div>
			<div className='badge_section_wrapper'>
				<h4>Funded/Supported by Telos Community Funding Badges</h4>
				<DownloadBadge label='Supported by Telos Community Funding' file='Supported by Telos Community Funding.zip' />
				<DownloadBadge label='Funded by Telos Community Funding' file='Funded by Telos Community Funding.zip' />
			</div>
		</div>
	);
};

const DownloadBadge = ({label, file}) => {
	return (
		<div className='telos_badge'>
			<a href={`https://resources.telosfoundation.io/badges/${file}`}>
				<div className='telos_badge_description'>
					<img src={telos_icon} alt='telos icon' />
					<p>{label}</p>
				</div>
			</a>
			<div className='telos_badge_zip'>
				<a href={`https://resources.telosfoundation.io/badges/${file}`}>
					<img src={zip_img} alt='badge zip' />
				</a>
			</div>
		</div>
	);
};

export default withRouter(connect(null, {selectLanguage})(Download));