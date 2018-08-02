import * as types from './ActionTypes';

export const create = (color) => ({
    type: types.CREATE,
    color
});

export const remove = (color) => ({
    type: types.REMOVE
});

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});
