import {combineReducers} from 'redux';
import LanguageReducer from './reducer_languages';
import SideNavReducer from './reducer_side_nav';
import RoadmapReducer from './reducer_roadmap';

const rootReducer = combineReducers({
	site_content: LanguageReducer,
	side_nav_open: SideNavReducer,
	telos_roadmap: RoadmapReducer
});

export default rootReducer;