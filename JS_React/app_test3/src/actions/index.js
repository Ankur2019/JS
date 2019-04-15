import { 
    SET_HISTORY,
    SET_STEPNUMBER,
    SET_MOV,
    SET_WIN_SQUARE,
    SET_CHOICE,
    SET_X,
} from "../constants/action-types";

export const set_history = (history, squares) => ({
    type: SET_HISTORY,
    payload: {history, squares}
});

export const set_stepnumber = step => ({
    type: SET_STEPNUMBER,
    payload: step
});

export const set_mov = val => ({
    type: SET_MOV,
    payload: val
});

export const set_win_square = windata => ({
    type: SET_WIN_SQUARE,
    payload: [windata.a, windata.b, windata.c]
});

export const set_choice = val => ({
    type: SET_CHOICE,
    payload: val
});

export const set_x = val => ({
    type: SET_X,
    payload: val
});
