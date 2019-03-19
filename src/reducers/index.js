import * as redux from "redux";
import { padReducer } from "./pad-reducer";

export const init = () => {
    const reducer = redux.combineReducers({
        pads: padReducer
    });

    const store = redux.createStore(reducer);

    return store;
};
