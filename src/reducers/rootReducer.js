import * as actionTypes from '../actions/actionTypes';

const initialState = {
  navigation: [
    { name: '', className: 'back-button', buttonIcon: 'fa-angle-left'},
    { name: 'About', className: '', buttonIcon: 'fa-comments-o'},
    { name: 'Videos', className: '', buttonIcon: 'fa-video-camera'},
    { name: 'Objectives', className: '', buttonIcon: 'fa-asterisk'},
    { name: 'Audience', className: '', buttonIcon: 'fa-money'},
    { name: 'Voice', className: '', buttonIcon: 'fa-microphone'},
    { name: 'Taste', className: '', buttonIcon: 'fa-sun-o'},
    { name: 'Assets', className: '', buttonIcon: 'fa-file'},
  ],
  objectives: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.ADD_OBJECTIVE:
      return {
        ...state,
        objectives: [
          ...state.objectives, 
          action.objective
        ]
      };
    case actionTypes.REMOVE_OBJECTIVE:
      return {
        ...state,
        objectives: [
          ...state.objectives.slice(0, action.index),
          ...state.objectives.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}

export default rootReducer;