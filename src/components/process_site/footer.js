import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import telos_icon from '../../img/Telos_MarketingSite_TelosIcon_334px.png';

import '../../styles/process_site/footer.css';

const Footer = () => {
	return (
		<footer id='process_footer'>
			<Grid>
				<Row>
					<Col md={4}>
						<ul className='social_links'>
							<li>
								<a
									href='https://twitter.com/HelloTelos'
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className='fa fa-twitter'></i>
								</a>
							</li>
							<li>
								<a
									href=''
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className='fa fa-telegram'></i>
								</a>
							</li>
							<li>
								<a
									href=''
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className='fa fa-github'></i>
								</a>
							</li>
							<li>
								<a
									href=''
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className='fa fa-youtube-play'></i>
								</a>
							</li>
							<li>
								<a
									href=''
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className='fa fa-facebook'></i>
								</a>
							</li>
						</ul>
					</Col>
					<Col md={4}>
						<div className='footer_icon'>
							<img src={telos_icon} alt='icon' />
						</div>
					</Col>
					<Col md={4}>
						<div className='email_link'>
							<a href='mailto:hello@telosfoundation.io'>hello@telosfoundation.io</a>
						</div>
					</Col>
				</Row>
			</Grid>
		</footer>
	);
};

export default Footer;