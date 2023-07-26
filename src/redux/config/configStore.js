import { configureStore } from "@reduxjs/toolkit";
import isLoginSlice from "../modules/loginSlice";
import likeSlice from '../modules/likeSlice';

const store = configureStore({
    reducer: { 
      isLogin : isLoginSlice,
      like: likeSlice
    },
   
  });
  
  export default store;