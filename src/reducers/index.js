import { combineReducers } from 'redux';
import { APP_DATA } from './app-data.reducer';
import { AR_MEMES } from './ar-memes.reducer';

export const ROOT_REDUCER = combineReducers({
      appData: APP_DATA,
      arMemes: AR_MEMES
})