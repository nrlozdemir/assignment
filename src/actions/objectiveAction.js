import * as actionTypes from './actionTypes';

export const addObjective = (objective) => {
  return {
    type: actionTypes.ADD_OBJECTIVE,
    objective: objective
  }
};

export const removeObjective = (index) => {
  return {
    type: actionTypes.REMOVE_OBJECTIVE,
    index: index
  }
}