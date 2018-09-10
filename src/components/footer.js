import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import PrivacyPolicyModal from './modals/privacy_policy_modal';
import telos_icon from '../img/Telos_MarketingSite_TelosIcon_334px.png';
import footer_background from '../img/Telos_MarketingSite_Footer_2400px.png';
import '../styles/footer.css';

export default class Footer extends Component {
	constructor(){
		super();
		this.state = {
			policyModalOpen: false
		};
	}

	render(){
		const {policyModalOpen} = this.state;

		return (
			<footer style={{backgroundImage: `url(${footer_background})`}} className='main_footer'>
				<Grid fluid>
					<Row>
						<Col sm={4}>
							<div className='footer_social'>
								<ul>
									<li><a href='https://twitter.com/HelloTelos' target='_blank' rel='noopener noreferrer'><i className='fa fa-twitter'></i></a></li>
									<li><a href='https://t.me/HelloTelos' target='_blank' rel='noopener noreferrer'><i className='fa fa-telegram'></i></a></li>
									<li><a href='https://github.com/Telos-Foundation' target='_blank' rel='noopener noreferrer'><i className='fa fa-github'></i></a></li>
									<li><a href='https://www.youtube.com/channel/UC1eRSAt81jUf7zM4hsy5S5Q?disable_polymer=true' target='_blank' rel='noopener noreferrer'><i className='fa fa-youtube'></i></a></li>
									<li><a href='https://www.facebook.com/TelosFoundation.io/' target='_blank' rel='noopener noreferrer'><i className='fa fa-facebook'></i></a></li>
								</ul>
							</div>
						</Col>
						<Col sm={4}>
							<img src={telos_icon} alt='icon' className='icon' />
						</Col>
						<Col sm={4}>
							<div className='footer_links'>
								<ul>
									{/*<li>
										<a 
											href='#'
											onClick={e => {
												e.preventDefault();
												this.setState({policyModalOpen: true});
												console.log(this.state.policyModalOpen);
											}}
										>
											Privacy Policy
										</a>
									</li>*/}
									<li>
										<a href='mailto:hello@telosfoundation.io'>hello@telosfoundation.io</a>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Grid>
				<PrivacyPolicyModal show={policyModalOpen} onHide={() => this.setState({policyModalOpen: false})} />
			</footer>
		);
	}
}