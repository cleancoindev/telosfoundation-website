import React, {Component} from 'react';
import Slider from 'react-slick';

import arrow_next from '../../img/dapps/arrow_next_white.png';
import arrow_prev from '../../img/dapps/arrow_prev_white.png';

export default class TFSlider extends Component {

	constructor(props){
		super(props);

		this.handleNext = this.handleNext.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
	}

	handleNext(){
		this.slider.slickNext();
	}

	handlePrevious(){
		this.slider.slickPrev();
	}

	render(){
		const {slides} = this.props;

		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 10000
		};

		const nextStyle = {
			backgroundImage: `url(${arrow_next})`
		};

		const prevStyle = {
			backgroundImage: `url(${arrow_prev})`
		};

		return (
			<section id='dapps_slider'>
				<Slider 
					{...settings}
					ref={el => this.slider = el}
				>
					{slides.map((slide, i) => {
						return (
							<DAppSlide
								key={i}
								img={slide.img}
								heading={slide.heading}
								paragraphs={slide.paragraphs}
								url ={slide.url} />
						);
					})}
				</Slider>
				<button
					className='slider_arrow previous'
					style={prevStyle}
					onClick={this.handlePrevious} />
				<button
					className='slider_arrow next'
					style={nextStyle}
					onClick={this.handleNext} />
			</section>
		);
	}
}

const DAppSlide = (props) => {
	const slideImageStyle = {
		backgroundImage: `url(${props.img})`
	};

	const routeChange = function(){
		window.location = props.url
	};

	return (
		<div className='dapps_slide' onClick={routeChange} >
			<div className='slide_image' style={slideImageStyle} ></div>
			<div className='slide_content_container'>
				<div className='slide_content'>
					<h4>{props.heading}</h4>
					{props.paragraphs.map((par, i) => <p key={i}>{par}</p>)}
				</div>
			</div>
		</div>
	);
};