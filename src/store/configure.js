import { createStore } from 'redux';
import modules from './modules';

const configure = () => {
    const devtools = window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_();
    const store = createStore(modules, devTools);

    return store;
}

export default configure;