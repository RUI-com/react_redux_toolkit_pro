import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice'
import authReducer from './authSlice';
//Access to store


const store = configureStore({reducer:{counter:counterReducer,ath:authReducer}});
export default store;
