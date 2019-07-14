import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import LanguageToggleDesktop from '../language_toggle_desktop';
import telos_logo from '../../img/Telos_MarketingSite_TelosLogo_500px.png';

import '../../styles/process_site/header.css';

class Header extends Component {
	render(){
		return (
			<header id='process_header'>
				<Navbar>
					<Navbar.Header>
						<Navbar.Toggle />
						<Navbar.Brand>
							<img
								src={telos_logo}
								alt='logo'
								className='telos_logo'
								onClick={() => this.props.history.push('/')} />
						</Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav
							pullRight
							onSelect={(key, e) => {
								e.preventDefault();
							}}
						>
							<NavDropdown title="FOUNDATION" id="basic-nav-dropdown">
								<MenuItem 
									onSelect={(key, e) => {
										e.preventDefault();
										this.props.history.push(`/foundation`);
									}}
								>
									About
								</MenuItem>
								<MenuItem 
									onSelect={(key, e) => {
										e.preventDefault();
										this.props.history.push(`/grant`);
									}}
								>
									Telos Foundation Grant Program
								</MenuItem>
							</NavDropdown>
							<NavDropdown title="TELOS NETWORK" id="basic-nav-dropdown">
								<MenuItem
									onSelect={(key, e) => {
										e.preventDefault();
										this.props.history.push(`/candidates`);
									}}
								>
									BLOCK PRODUCERS
								</MenuItem>
								<MenuItem
									onSelect={(key, e) => {
										e.preventDefault();
										this.props.history.push(`/roadmap`);
									}}
								>
									DEVELOPMENT ROADMAP
								</MenuItem>
							
									<NavDropdown title="MONITORS" id="basic-nav-dropdown">
								<Navbar.Header>Mainnet</Navbar.Header>
								<MenuItem
									onClick={(e) => {
										e.preventDefault();
										window.open('https://telos.bloks.io/');
									}} 
									href="https://telos.bloks.io/"
								>
									Bloks
								</MenuItem>
								<MenuItem
									onClick={(e) => {
										e.preventDefault();
										window.open('https://telos.eosx.io/');
									}} 
									href="https://telos.eosx.io/"
								>
									EosX
								</MenuItem>
								<MenuItem 
									onClick={(e) => {
										e.preventDefault();
										window.open('https://monitor.telosfoundation.io/');
									}}
									href="https://monitor.telosfoundation.io/"
								>
									Telos Foundation
								</MenuItem>
								<MenuItem
									onClick={(e) => {
										e.preventDefault();
										window.open('https://telostracker.io/monitor');
									}} 
									href="https://telostracker.io/monitor"
								>
									Telos Tracker
								</MenuItem>
								<Navbar.Header>Testnet</Navbar.Header>
								<MenuItem
									onClick={(e) => {
										e.preventDefault();
										window.open('https://telos-test.eosx.io/');
									}} 
									href="https://telos-test.eosx.io/"
								>
									EosX
								</MenuItem>
								<MenuItem
									onClick={(e) => {
										e.preventDefault();
										window.open('https://mon-test.telosfoundation.io/');
									}} 
									href="https://mon-test.telosfoundation.io/"
								>
									Telos Foundation
								</MenuItem>
								<MenuItem
									onClick={(e) => {
										e.preventDefault();
										window.open('https://testnet.telostracker.io/');
									}} 
									href="https://testnet.telostracker.io/"
								>
									Telos Tracker
								</MenuItem>
							</NavDropdown>
							</NavDropdown>
							<NavDropdown title="BUILDING ON TELOS" id="basic-nav-dropdown">
								<MenuItem 
									onSelect={(key, e) => {
										e.preventDefault();
										this.props.history.push(`/dapps`);
									}}
								>
									Building dApps
								</MenuItem>
								<MenuItem
									onClick={(e) => {
										e.preventDefault();
										window.open('https://enterprise.telosfoundation.io');
									}} 
									href="https://enterprise.telosfoundation.io"
								>
									Enterprise Business Solutions
								</MenuItem>
							</NavDropdown>
							<NavDropdown
								title="MORE"
								id="more-nav-dropdown"
								onSelect={(key, e) => {
									e.preventDefault();
									this.props.history.push(`/${key}`);
								}}
							>
								<MenuItem
						    		eventKey='arbitrators'
						    	>
									Arbitration
								</MenuItem>
								<MenuItem
						    		eventKey='governance'
						    	>
									Governance
								</MenuItem>
								<MenuItem
						    		eventKey='downloads'
						    	>
									Resources
								</MenuItem>
								<MenuItem
						    		eventKey='proposal'
						    	>
									Worker Proposals
								</MenuItem>
								<MenuItem
						    		eventKey='faq'
						    	>
									FAQ
								</MenuItem>
							</NavDropdown>
							<LanguageToggleDesktop />
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				{this.props.location.pathname === '/roadmap' && (
					<nav className='process_page_nav'>
						<Grid>
							<ul>
								<li><a href="#future_anchor">ROADMAP</a></li>
								<li><a href="#team_anchor">TEAM</a></li>
								<li><a href="#history_anchor">PROJECT HISTORY</a></li>
							</ul>
						</Grid>
					</nav>
				)}
			</header>
		);
	}
}

export default withRouter(Header);
