import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectLanguage} from '../actions';
import english_flag from '../img/flags/en.png';
import brazil_flag from '../img/flags/pt-br.png';
import china_flag from '../img/flags/china.png';
import spain_flag from '../img/flags/spain.png';
import korea_flag from '../img/flags/korea.png';
import '../styles/language_toggle.css';

class LanguageToggle extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		e.preventDefault();
		this.props.selectLanguage(e.target.value);
		//write to local storage
		window.localStorage.setItem('telos_language', e.target.value);
	}

	render(){
		const get_flag = () => {
			let flag;
			switch(this.props.site_content.language){
				case 'en':
					flag = english_flag;
					break;
				case 'pt-br':
					flag = brazil_flag;
					break;
				case 'mandarin':
					flag = china_flag;
					break;
				case 'spanish':
					flag = spain_flag;
					break;
				case 'korean':
					flag = korea_flag;
					break;
				default:
					flag = english_flag;
					break;
			}
			return flag;
		};

		if(!this.props.site_content) return <div></div>;
		return (
			<li className='language_toggle_li'>
				<img src={get_flag()} alt='language flag' className='language_toggle_flag' /> 
				<select
					className='language_toggle'
					onChange={this.handleChange}
					value={this.props.site_content.language}>
					<option value='en'>ENGLISH</option>
					<option value='pt-br'>PORTUGUÊS</option>
					<option value='mandarin'>中文</option>
					<option value='spanish'>ESPAÑOL</option>
				</select>
			</li>
		);
	}
}

function mapStateToProps(state){
	return {site_content: state.site_content};
}

export default connect(mapStateToProps, {selectLanguage})(LanguageToggle);