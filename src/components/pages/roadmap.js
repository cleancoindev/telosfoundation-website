import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

//images
import community_icon from '../../img/roadmap_icons/roadmap_community_icon.png';
import development_icon from '../../img/roadmap_icons/roadmap_development_icon.png';
import governance_icon from '../../img/roadmap_icons/roadmap_governance_icon.png';
import network_icon from '../../img/roadmap_icons/roadmap_network_icon.png';
import tools_icon from '../../img/roadmap_icons/roadmap_tools_icon.png';

import '../../styles/roadmap.css';

const icons = {
	community: community_icon,
	development: development_icon,
	governance: governance_icon,
	network: network_icon,
	tools: tools_icon
};


class Roadmap extends Component {

	render(){
		const {telos_roadmap} = this.props;

		return (
			<div className='roadmap'>
				<Grid>
					<Row>
						<Col md={10} mdOffset={1}>
							<Intro />
							<RoadmapCalendar telos_roadmap={telos_roadmap} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

const Intro = () => {
	return (
		<section id='roadmap_intro'>
			<h1>Telos Development History</h1>
				<h2>Core development tasks completed by the <br />Telos Launch Group (TLG) and Telos Core Developers</h2>
			<RoadmapLegend />
		</section>
	);
};

const RoadmapLegend = () => {
	return (
		<div id='roadmap_legend'>
			<div className='legend_item'>
				<img src={development_icon} alt='roadmap development' />
				<p>Development</p>
			</div>
			<div className='legend_item'>
				<img src={tools_icon} alt='roadmap tools' />
				<p>Tools</p>
			</div>
			<div className='legend_item'>
				<img src={governance_icon} alt='roadmap governance' />
				<p>Governance</p>
			</div>
			<div className='legend_item'>
				<img src={community_icon} alt='roadmap community' />
				<p>Community</p>
			</div>
			<div className='legend_item'>
				<img src={network_icon} alt='roadmap network' />
				<p>Network</p>
			</div>
		</div>
	);
};

const RoadmapCalendar = ({telos_roadmap}) => {
	return (
		<div id='roadmap_calendar'>
			{
				telos_roadmap.map((rmMonth, i) => {
					return (
						<RoadmapMonth
							key={i}
							month={rmMonth.month}
							year={rmMonth.year}
							items={rmMonth.items} />
					);
				})
			}
		</div>
	);
};


//month card
class RoadmapMonth extends Component {

	constructor(){
		super();
		this.state = {expanded: false};
	}

	handleClick(){
		const {expanded} = this.state;
		this.setState({expanded: !expanded});
	}

	render(){
		const {
			month,
			year,
			items
		} = this.props;

		const {expanded} = this.state;

		//only check if expanded.  If smaller card somehow got expanded, it would look the same.
		const getListItems = () => {
			if(expanded){
				return items.map((item, i) => {
					return (
						<RoadmapListItem
							key={i}
							category={item.category}
							content={item.content}
							link={item.link} />
					);
				});
			}else{
				return items.slice(0, 5).map((item, i) => {
					return (
						<RoadmapListItem
							key={i}
							category={item.category}
							content={item.content}
							link={item.link} />
					);
				});
			}
		};

		return (
			<div className='roadmap_month'>
				<header>
					<h5>{month}</h5>
					<h5>{year}</h5>
				</header>
				<div className='month_body'>
					<ul>
						{getListItems()}
					</ul>
				</div>
				<footer>
					{items.length > 5 ? <button onClick={this.handleClick.bind(this)}><i className='fa fa-ellipsis-h'></i></button> : ''}
				</footer>
			</div>
		);
	}
}

const RoadmapListItem = props => {
	const {
		category,
		content,
		link
	} = props;

	const liStyle = {
		backgroundImage: `url(${icons[category]})`
	};

	//will have to get icons
	const getLink = () => {
		if(!link) return <div></div>;

		//array of links
		if(typeof link !== 'string'){
			return link.map((el, i) => {
				return <a
					href={el}
					target='_blank'
					rel='noopener noreferrer'
					className='roadmap_li_link'
				>
					<i className='fa fa-github'></i>
				</a>
			});
		}

		//just one link
		return (
			<a
				href={link}
				target='_blank'
				rel='noopener noreferrer'
				className='roadmap_li_link'
			>
				<i className='fa fa-github'></i>
			</a>
		);
	};

	return (
		<li style={liStyle}>
			{content}
			{getLink()}
		</li>
	);
}

function mapStateToProps(state){
	return {
		telos_roadmap: state.telos_roadmap
	};
}

export default connect(mapStateToProps, null)(Roadmap);