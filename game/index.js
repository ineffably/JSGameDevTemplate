import 'babel-polyfill';
import game from './game';
// quick hack to add global state to peek if bundle loaded
global.__APP_LOADED__ = true;

game.start();