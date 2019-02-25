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
			<RoadmapFuture roadmap_future={props.roadmap_future} />
			<DeveloperTeam developer_team={props.developer_team} />
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
		<header id='roadmap_intro'>
			<div id='history_anchor'></div>
			<h1>Telos Development History</h1>
			<h2>Telos was built by the Telos Launch Group (TLG) as a grassroots, decentralized project over about 7 months with over 120 global contributors. The TLG freely distributed TLOS accounts and tokens to EOS genesis token-holders without ever conducting an ICO or token sale. Following the December 2018 launch and activation of Telos, the TLG disbanded and further development was performed by the Telos Core Developers.</h2>
			<RoadmapLegend />
		</header>
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
				return items.slice(0, 7).map((item, i) => {
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

	//get icon for this category, if there is one
	const categoryStr = (category || 'none').trim().toLowerCase();

	const liStyle ={
		backgroundImage: `url(${icons[categoryStr]})`
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

const DeveloperTeam = props => {
	return (
		<section id='developer_team'>
			<div id='team_anchor'></div>
			<DeveloperIntro />
			<TeamMembers developer_team={props.developer_team} />
		</section>
	);
};

const DeveloperIntro = () => {
	return (
		<header id='developer_intro'>
			<h1>Telos Core Developer Team</h1>
			<h2>The Telos Core Developer team builds and maintains code for Telos and Telos-related tools. It is paid by user-voted worker proposals. The TCD actively encourages developers passionate about blockchain, DPOS, and the Telos ethos to join and be paid to help make Telos the world’s greatest blockchain.</h2>
		</header>
	);
};

const TeamMembers = props => {
	return (
		<div className='dev_team_members'>
			{
				props.developer_team.map((dev, i) => {
					return (
						<TeamMember
							key={i}
							name={dev.name}
							title={dev.title}
							company={dev.company}
							image={dev.image}
							bio={dev.bio}
							links={dev.links} />
					);
				})
			}
		</div>
	);
};

const TeamMember = props => {
	const {
		name,
		title,
		company,
		image,
		bio,
		links
	} = props;

	const getIconFromUrl = url => {
		if(new RegExp('github.com').test(url)) return (<i className='fa fa-github'></i>);
		if(new RegExp('linkedin.com').test(url)) return (<i className='fa fa-linkedin'></i>);
		return (<i className='fa fa-link'></i>);
	}

	const getLinks = () => {
		return links.map((link, i) => {
			return (
				<li key={i}>
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
					>
						{getIconFromUrl(link)}
					</a>
				</li>
			);
		});
	};

	return (
		<div className='dev_team_member'>
			<header>
				<h5>{name}</h5>
				<h5 className='title'>{title}</h5>
				<h5>{company}</h5>
			</header>
			<div className='dev_bio'>
				<img src={image} alt={name} />
				{bio.map((par, i) => <p key={i}>{par}</p>)}
			</div>
			<footer>
				{links ? <ul>{getLinks()}</ul> : ''}
			</footer>
		</div>
	);
};

const RoadmapFuture = props => {
	return (
		<section id='roadmap_future'>
			<div id='future_anchor'></div>
			<FutureIntro />
			<FutureItems roadmap_future={props.roadmap_future} />
		</section>
	);
};

const FutureIntro = () => {
	return (
		<header id='future_intro'>
			<h1>Telos Development Roadmap</h1>
			<h2>The Telos Core Developers have these projects under current development or scheduled for development in the near future. These projects are entirely supported by worker proposal funds voted by Telos users. Please remember to vote for developer proposals to support ongoing development and help decide the direction of future growth.</h2>
		</header>
	);
};

const FutureItems = props => {
	return (
		<div className='future_items_container'>
			{
				props.roadmap_future.map((item, i) => {
					return (
						<FutureItem
							key={i}
							name={item.name}
							description={item.description}
							priority={item.priority}
							status={item.status}
							personnel={item.personnel}
							estimate={item.estimate} />
					);
				})
			}
		</div>
	);
};

const FutureItem = props => {
	const {
		name,
		description,
		priority,
		status,
		personnel,
		estimate
	} = props;

	return (
		<div className={`future_item priority-${priority}`}>
			<h4>{name}</h4>
			<p>{description}</p>
			<p><strong>Priority:</strong> <span className='priority_value'>{priority}</span></p>
			<p><strong>Status:</strong> {status}</p>
			{estimate ? <p><strong>Estimate:</strong> {estimate}</p> : ''}
			<p className='future_personnel'>{personnel ? personnel.join(', ') : ''}</p>
		</div>
	);
};

function mapStateToProps(state){
	return {
		telos_roadmap: state.telos_roadmap,
		developer_team: state.developer_team,
		roadmap_future: state.roadmap_future
	};
}

export default connect(mapStateToProps, null)(Roadmap);