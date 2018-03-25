import moment from 'moment';
import { push } from 'react-router-redux';
import {menus} from '../reducers/home'
/**
 * 定义常量
 */
export const UPDATE_TIME = "UPDATE_TIME";
export const SWITCH_NAV = "SWITCH_NAV";
export const SWITCH_MENU = "SWITCH_MENU";
//定时器
let interval = null;
export function start_time() {
    return (dispatch, getState) => {
        interval = setInterval(() => {
            dispatch({
                type: UPDATE_TIME,
                time: moment(Date.now()).utcOffset(8).format("YYYY年-MM月-DD日 hh:mm:ss")
            });
        }, 1000)
    }
}
export function end_time() {

    clearInterval(interval);
    return {
        type: UPDATE_TIME,
        time: null
    }
}

export function switch_module(module) {
    return (dispatch, getState) => {
        if (typeof module == 'string' && module in menus) {
            dispatch(push('/' + module))
            dispatch({
                type: SWITCH_NAV,
                payload: {
                    currentModule: module
                }
            });
        }
    }
}
export function switch_nav(nav) {
    return (dispatch, getState) => {

        if (typeof nav == 'string') {
            let { home: { memory: { currentModule } } } = getState();
            dispatch(push('/' + currentModule + '/' + nav))
            dispatch({
                type: SWITCH_NAV,
                payload: {
                    currentNav: nav
                }
            });
        }
    }
}