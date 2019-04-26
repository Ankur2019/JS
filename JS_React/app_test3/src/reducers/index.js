
import set_history from "./set_history"
import set_stepNumber from "./set_stepNumber"
import set_mov_asc from "./set_mov_asc"
import set_choice from "./set_choice"
import set_win_square from "./set_win_square"
import set_xIsNext from "./set_xIsNext"

import {combineReducers} from "redux";


export default combineReducers({
    set_history,
    set_stepNumber,
    set_mov_asc,
    set_win_square,
    set_choice,
    set_xIsNext,
});
