import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import foundation_logo from '../../img/foundation_site/logo.png';

import '../../styles/grant.css';

const Grant = () => {
	return (
		<div>
			<ScrollAnimation
				animateOnce
				animateIn='fadeIn'
				duration={0.4}
			>
			<ProgramDetails/>
			</ScrollAnimation>

		</div>
	);
};

const ProgramDetails = () => {
	return (
		<section id='grant_content'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='intro_logo_container'>
							<img src={foundation_logo} alt='telos foundation logo' />
							<h1><strong>Telos</strong> Grant Program</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='grant_content'>
                        	<p>The aim of the Telos Foundation Grant Program is to provide grants to groups promoting necessary network functions that cannot or are not otherwise supported by worker proposals. We are grateful to the community, for all its ongoing efforts and dedication. While the Telos Foundation and the network are still very young, we are hopeful that this program will help support the evolution that we are all developing together. All applications are appreciated.  </p>
						</div>
                        <div className='grant_content'>
                        	<p className='row_header'>Eligibility</p>
							<ul>
								<li>If you are a blockchain developer or development team and need some additional support for your in-progress project, please apply! 
								</li>
								<br/>
								<li>If your project will be a solid benefit to the Telos Blockchain community, please apply!
								</li>
								<br/>
								<li>If you have a great dapp and want to build on EOSIO and Telos, please apply!
								</li>
							</ul>
						</div>
					</Col>
				</Row>
                <Row>
					<Col md={10} mdOffset={1}>
                        <div className='grant_content'>
                            <p className="row_header">Submission and Review Cycles</p>
                            <p>Submission Portal is open the 1st-15th of each month. After the 15th, the Telos Foundation Grant Selection Panel will review and follow-up with applicants for a potential video interview and/or to ask for additional material if needed. Monthly award winners will be contacted by the 28th of each month, and Grantees will be publicly announced towards the end of each month, following the review period. The submission form link is at the bottom of this page. </p>
						</div>
					</Col>
				</Row>
                <Row>
					<Col md={10} mdOffset={1}>
                        <div className='grant_content'>
                            <p className="row_header">Award Allocation</p>
                            <p>The Telos Foundation awards up to 100,000 TLOS per month, which may be split among applicable candidates who meet the criteria and are selected by a review panel, consisting of Telos Foundation members and industry experts.</p>
						</div>
					</Col>
				</Row>
                <Row>
					<Col md={10} mdOffset={1}>
                        <div className='grant_content'>
                        	<p className="row_header">Criteria and Evaluation for Applicants</p>
                            <p>Evaluation will happen in two phases:</p>
							<ol>
								<li>The first phase involves evaluation of submitted materials, request for additional materials if needed, and review of core competencies. 
								</li>
								<br/>
								<li>The second phase is a team interview via video link. 
								</li>
							</ol>
                            <p>The Review Panel is made up of a core group from members of the Telos Foundation and the EOSIO community. </p>
						</div>
					</Col>
				</Row>
                <Row>
					<Col md={10} mdOffset={1}>
                        <div className='grant_content'>
                        	<p className="row_header">Recipient Requirements</p>
							<ul>
								<li>Applications must be deployable on the Telos Blockchain Network. 
								</li>
								<br/>
								<li>Must mention Telos Foundation Grant Program as a supporter on website and include Telos logo.
								</li>
								<br/>
								<li>Must mention Telos Foundation in at least one social media post per week during the period of support and for 30 days post deployment, when referring to support for your project using hashtags <strong>#buildontelos</strong>  &amp;  <strong>#gotelos</strong>.
								</li>
							</ul>
						</div>
					</Col>
				</Row>
                <Row>
					<Col md={10} mdOffset={1}>
                        <div className='grant_content'>
                        	<p className="row_header">Agreement and Terms</p>
							<ol>
								<li>Grantees will be asked to sign an agreement prior to receiving awards. The distribution of TLOS tokens will be 50% at the time of award and 50% following successful launch on Telos. 
								</li>
								<br/>
								<li>Applicants must be available for a video interview with review panel during the review period in which they apply.
								</li>
								<br/>
								<li>Transparency is important. Applicants must agree to allow the Telos Foundation to publicly name the project and applicants if an award is given. In most cases, funded projects should already have a publicly-accessible repository, and in all cases must adhere to one or more specified open source licenses.
								</li>
							</ol>
						</div>
					</Col>
				</Row>
                <Row>
					<Col md={10} mdOffset={1}>
                        <div className='grant_content'>
                        	<p className="row_header">Grant Program Restrictions</p>
							<ol>
								<li>Awards are not to be considered as venture capital. 
								</li>
								<br/>
								<li>The Telos Foundation will not grant funding for projects that do not have on-going development or completion goals acceptable to the judging panel. 
								</li>
								<br/>
								<li>The Grant Program is not a bounty system. 
								</li>
							</ol>
						</div>
					</Col>
				</Row>
                <Row>
					<Col md={10} mdOffset={1}>
                        <div className='grant_content grant_form'>
                        	<p>SUBMISSION FORM LINK: <a href="https://forms.gle/8ApaQt1TKctugVW6A">https://forms.gle/8ApaQt1TKctugVW6A</a></p>
                        	<p>Questions and comments should be directed to “Attn: Grant Team” at <a href="mailto:hello@telosfoundation.io?subject=Attn: Grant Team">hello@telosfoundation.io</a>.</p>
							<p className="warning">Disclaimer: Program is subject to change at the discretion of the Telos Foundation Board of Directors.</p>
                        </div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

export default Grant;
