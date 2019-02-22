import {combineReducers} from 'redux';
import LanguageReducer from './reducer_languages';
import SideNavReducer from './reducer_side_nav';
import RoadmapReducer from './reducer_roadmap';
import DevTeamReducer from './reducer_dev_team';
import RoadmapFutureReducer from './reducer_roadmap_future';

const rootReducer = combineReducers({
	site_content: LanguageReducer,
	side_nav_open: SideNavReducer,
	telos_roadmap: RoadmapReducer,
	developer_team: DevTeamReducer,
	roadmap_future: RoadmapFutureReducer
});

export default rootReducer;