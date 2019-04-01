import * as redux from "redux";
import { padReducer, selectedPadReducer } from "./pad-reducer";

export const init = () => {
    const reducer = redux.combineReducers({
        pads: padReducer,
        pad: selectedPadReducer
    });

    const store = redux.createStore(reducer);

    return store;
};
