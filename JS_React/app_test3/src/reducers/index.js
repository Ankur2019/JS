
import set_history from "./set_history"
import set_stepnumber from "./set_stepnumber"
import set_mov from "./set_mov"
import set_choice from "./set_choice"
import set_win_square from "./set_win_square"
import set_x from "./set_x"

import {combineReducers} from "redux";


export default combineReducers({
    set_history,
    set_stepnumber,
    set_mov,
    set_win_square,
    set_choice,
    set_x,
});
