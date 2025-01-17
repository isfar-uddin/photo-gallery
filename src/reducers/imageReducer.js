import { FETCH_IMAGES } from "../actions/types";

const initialState = {
  images:[]
};

export default (state = initialState, action) => {
  switch (action.type){
    case FETCH_IMAGES:
      return{
        ...state,
        images:action.payload
      };
    default:
      return state;
  }
}