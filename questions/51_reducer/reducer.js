//Redux Practice
//You will be expanding on the reducer function

//types are defined here.
const types = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
};

const initialState = [
  {
    item: 'Use Redux',
    completed: false,
    id: 0,
  },
];

const reducer = (state = initialState, action) => {
  //ADD YOUR CODE HERE
  switch (action.type) {
    case 'ADD_TODO': {
      const todo = {
        text: action.text,
        completed: false,
        id: state.length
      }
      state = [todo, ...state];
      return state;
    }
    case 'DELETE_TODO': {
      state = state.filter(item => item.id !== action.id);
      return state;
    }
    case 'COMPLETE_TODO': {
      const itemToModify = state.find(item => item.id === action.id);
      itemToModify.completed = true;
      return state;
    }
    default:
      return state;
  }
};

module.exports = { types, initialState, reducer };
