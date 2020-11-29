import {combineReducers} from '@reduxjs/toolkit';
import {connectRouter} from "connected-react-router";
import {mainReducer} from "./modules/main";

export default function createRootReducer(history) {
    return combineReducers(
        {
            router: connectRouter(history),
            main: mainReducer,
        }
    );
}
