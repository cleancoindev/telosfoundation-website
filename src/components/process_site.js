import React, {Component} from 'react';
import Roadmap from './pages/roadmap';
import Header from './process_site/header';
import Footer from './process_site/footer';
import '../styles/process_site/process_site.css';

class ProcessSite extends Component {
	componentDidMount(){
		window.scrollTo(0, 0);
	}

	render(){
		return (
			<div>
				<Header />
				<main className='process_site_main'>
					<Roadmap />
				</main>
				<Footer />
			</div>
		);
	}
}

export default ProcessSite;