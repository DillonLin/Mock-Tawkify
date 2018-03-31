const initialState = { 
  gender: '',
  income: '' 
};

const aboutYourselfReducer = (state=initialState, action) => {
  switch(action.type) {
    case "SET_INCOME": {
      return {...state, income: action.payload}
    }
    case "SET_GENDER": {
      return {...state, income: action.payload}
    }
  }
  return state;
};

export default aboutYourselfReducer;