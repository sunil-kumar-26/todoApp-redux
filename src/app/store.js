import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/todolist/Todoslice';
//Features\todolist\Todoslice.js
const store=configureStore({
    reducer:{
        todo:todoReducer
    }
});

export default store;