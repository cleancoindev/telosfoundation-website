import React, {Component} from 'react';
import {Grid, Row, Col, ResponsiveEmbed, Table} from 'react-bootstrap';
import RewardsModal from '../modals/rewards_modal';
import ScrollAnimation from 'react-animate-on-scroll';
import {Helmet} from 'react-helmet';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectLanguage} from '../../actions';

import '../../styles/rewards.css';

class RewardsTranslate extends Component {

	constructor(props){
		super(props);

		this.state = {
			showRewardsModal: false,
			rewards_page: null
		};
	}

	componentDidMount(){
		//go to top
		window.scrollTo(0, 0);
		if(this.props.match.params.language){
			this.props.selectLanguage(this.props.match.params.language);
		}
	}

	render(){
		const {rewards_page} = this.props;
		if(!rewards_page) return <div>no content yet</div>;

		return (
			<div className='rewards'>
				<Helmet>
					<title>Telos Rewards Program</title>
					<meta name="description" content="Telos is a community-led alternative to EOS. We need you to help spread the word and make the Telos Network a success. You can share in the 1 million TLOS community rewards pool." />
				</Helmet>
				<section id='rewards_intro'>
					<ScrollAnimation
						animateOnce
						animateIn='fadeIn'
						duration={0.5}
					>
						<Grid>
							<Row>
								<Col md={12}>
									<h1>{rewards_page.intro.intro_heading}</h1>
								</Col>
							</Row>
							<Row>
								<Col 
									md={5}
									sm={6}
								>
									{/*
										rewards_page.intro.intro_paragraphs.map((par, i) => {
											return <p key={i} dangerouslySetInnerHTML={{__html: par}} />
										})
									*/}
									<p><strong>Sign-ups for this program are now closed.</strong> Telos is a community-led alternative to EOS. We need you to help spread the word and make the Telos Network a success. You can share in the 1 million TLOS community rewards pool.</p>
									<p>You can make videos, articles, tweets, posts, tutorials—just about anything that helps spread the word. Meetups, community management and more is all available and receives rewards both for the initial action <span className='underline'>and</span> when people engage with you by liking, clapping, attending, viewing, whatever.</p>
									<p>From now until one week after activation, you can submit a final list of your community engagement posts for your token rewards.</p>
									<p>Telos is a blockchain where your voice matters, so use that voice to tell everyone about the world changing advantages of the Telos Network.</p>
								</Col>
								<Col
									md={7}
									sm={6}
								>
									<ResponsiveEmbed a16by9>
										<iframe title='Rewards Program Video' src='https://www.youtube.com/embed/1XJjGqzS1AU' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>
									</ResponsiveEmbed>
									<div className='text-center video_heading'>
										<h2>The Community Rewards Program is now closed!</h2>
										<h4>Thanks to everyone who participated.</h4>
									</div>
								</Col>
							</Row>
						</Grid>
					</ScrollAnimation>
				</section>
				<RewardsDescription description={rewards_page.description} />
				<RewardsTable table={rewards_page.table} />
				<RewardsModal show={this.state.showRewardsModal} onHide={() => this.setState({showRewardsModal: false})} />
			</div>
		);
	}
}

const RewardsDescription = ({description}) => {
	if(!description) return <div>no description</div>;
	return (
		<section id='rewards_description'>
			<header className='text-center'>
				<h2>{description.main_heading}</h2>
			</header>
			<Grid>
				<Row>
					<Col md={12}>
						<ScrollAnimation
							animateOnce
							animateIn='fadeInUp'
							duration={0.4}
						>
							<div className='text-center'>
								<h3>{description.sub_heading}</h3>
							</div>
						</ScrollAnimation>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<ScrollAnimation
							animateOnce
							animateIn='fadeInUp'
							duration={0.4}
							delay={150}
						>
							<ol>
								{
									description.column_one.map((item, i) => {
										return <li key={i}>{item}</li>;
									})
								}
							</ol>
						</ScrollAnimation>
					</Col>
					<Col md={4}>
						<ScrollAnimation
							animateOnce
							animateIn='fadeInUp'
							duration={0.4}
							delay={300}
						>
							<ol start='4'>
								{
									description.column_two.map((item, i) => {
										return <li key={i}>{item}</li>;
									})
								}
							</ol>
							<ul className='rewards_social_links'>
								<li><a href='https://telosfoundation.io/' target='_blank' rel='noopener noreferrer'>https://telosfoundation.io/</a></li>
								<li><a href='https://twitter.com/HelloTelos' target='_blank' rel='noopener noreferrer'>https://twitter.com/HelloTelos</a></li>
								<li><a href='https://t.me/HelloTelos' target='_blank' rel='noopener noreferrer'>https://t.me/HelloTelos</a></li>
								<li><a href='https://www.youtube.com/c/TheTelosNetwork' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/c/TheTelosNetwork</a></li>
							</ul>
						</ScrollAnimation>
					</Col>
					<Col md={4}>
						<ScrollAnimation
							animateOnce
							animateIn='fadeInUp'
							duration={0.4}
							delay={450}
						>
							<ol start='7'>
								{
									description.column_three.map((item, i) => {
										return <li key={i}>{item}</li>;
									})
								}
							</ol>
						</ScrollAnimation>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const RewardsTable = ({table}) => {
	if(!table) return <div>no table</div>;
	const {table_headings, table_rows} = table;
	return (
		<section id="rewards_table">
			<ScrollAnimation
				animateOnce
				animateIn='fadeIn'
				duration={0.5}
			>
				<Grid>
					<Row>
						<Col md={12}>
							<Table striped bordered responsive>
								<thead>
									<tr>
										<th>{table_headings.site_category}</th>
										<th>{table_headings.task_category}</th>
										<th>{table_headings.task}</th>
										<th>{table_headings.tier_reward}</th>
										<th>{table_headings.proof}</th>
									</tr>
								</thead>
								<tbody>
									{
										table_rows.map((row, i) => {
											return (
												<tr key={i}>
													<td>{row.site_category}</td>
													<td dangerouslySetInnerHTML={{__html: row.task_category}}></td>
													<td dangerouslySetInnerHTML={{__html: row.task}}></td>
													<td>
														{
															row.tier_reward.map((item, j) => {
																if(item.tier === null){
																	return <span key={j}>{item.reward}</span>;
																}
																return (
																	<table key={j} className='tier_reward_table'>
																		<tr>
																			<td>{item.tier}</td>
																			<td>{item.reward}</td>
																		</tr>
																	</table>
																);
															})
														}
													</td>
													<td>{row.proof}</td>
												</tr>
											);
										})
									}
								</tbody>
							</Table>
						</Col>
					</Row>
				</Grid>
			</ScrollAnimation>
		</section>
	);
};

export default withRouter(connect(null, {selectLanguage})(RewardsTranslate));