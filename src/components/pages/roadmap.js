import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

//images
import community_icon from '../../img/roadmap_icons/roadmap_community_icon.png';
import development_icon from '../../img/roadmap_icons/roadmap_development_icon.png';
import governance_icon from '../../img/roadmap_icons/roadmap_governance_icon.png';
import network_icon from '../../img/roadmap_icons/roadmap_network_icon.png';
import tools_icon from '../../img/roadmap_icons/roadmap_tools_icon.png';
import null_icon from '../../img/roadmap_icons/roadmap_null_icon.png';

import telos_logo from '../../img/checklist/logo_gray32x35.png';

import '../../styles/roadmap.css';

const icons = {
	community: community_icon,
	development: development_icon,
	governance: governance_icon,
	network: network_icon,
	tools: tools_icon,
	none: null_icon
};

const Roadmap = props => {
	return (
		<div className='roadmap'>
			<Grid>
				<Row>
					<Col md={12}>
						<Intro />
						<RoadmapCalendar telos_roadmap={props.telos_roadmap} />
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

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

//flex container of all the months
const RoadmapCalendar = ({telos_roadmap}) => {
	return (
		<div id='roadmap_calendar'>
			{
				telos_roadmap.map((rmMonth, i) => {
					return (
						<RoadmapMonth
							key={i}
							month={rmMonth.month}
							stage={rmMonth.stage}
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
			stage,
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

		//use ... and up arrow/caret when expanded
		const footerIcon = expanded ? <i className='fa fa-caret-up' /> : <i className='fa fa-ellipsis-h' />;

		return (
			<div className={`roadmap_month stage_${stage}`}>
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
					{ items.length > 5 ? <button onClick={this.handleClick.bind(this)}>{footerIcon}</button> : '' }
				</footer>
			</div>
		);
	}
}

//render the list
const RoadmapListItem = props => {
	const {
		category,
		content,
		link
	} = props;

	const liStyle ={
		backgroundImage: `url(${category ? icons[category] : icons.none})`
	};

	//pick icon based on url contents.  May need to be reworked when I get real links
	const getIconFromURL = url => {
		if(new RegExp('github.com').test(url)) return (<i className='fa fa-github'></i>);
		if(new RegExp('medium.com').test(url)) return (<i className='fa fa-medium'></i>);
		if(new RegExp('telosfoundation.io').test(url)) return (<img src={telos_logo} alt='telos link' />);
		return (<i className='fa fa-link'></i>);
	};

	//will have to get icons
	//create the links 
	const getLinks = () => {
		if(!link) return <div></div>;

		//array of links
		if(typeof link !== 'string'){
			return link.map((url, i) => {
				return <a
					key={i}
					href={url}
					target='_blank'
					rel='noopener noreferrer'
					className='roadmap_li_link'
				>
					{getIconFromURL(url)}
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
				{getIconFromURL(link)}
			</a>
		);
	};

	return (
		<li style={liStyle}>
			{content}
			{getLinks()}
		</li>
	);
};

function mapStateToProps(state){
	return {
		telos_roadmap: state.telos_roadmap
	};
}

export default connect(mapStateToProps, null)(Roadmap);