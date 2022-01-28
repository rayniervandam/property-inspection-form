import { A as ActiveRouter } from './active-router-b59500f4.js';
import './match-path-760e1797.js';
import './index-841d19c4.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
