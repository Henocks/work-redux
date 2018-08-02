import { combineReducers } from 'redux';
import counter from './counter';
import configure from './configure';

export default configure;
export default combineReducers({
    counter
});