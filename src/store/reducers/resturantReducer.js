import {
  GET_RESTURANTS,
  GET_RESTURANTS_TAGS,
  ADD_RESTURANTS,
  GET_RESTURANT,
  GET_ALL_RESTURANTS,
  SELECTED_TAG,
} from '../actions/actionTypes';

const initState = {
  brands: [],
  tags: [],
  resturant: {},
  selectedTag: '',
};

const resturantReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_RESTURANTS:
      return {
        ...state,
        brands: action.brands,
      };
    case GET_RESTURANTS_TAGS:
      return {
        ...state,
        tags: action.tags,
      };
    case ADD_RESTURANTS:
      return {
        ...state,
        brands: state.brands.concat(action.resturant),
      };
    case GET_RESTURANT:
      return {
        ...state,
        resturant: state.brands.find(res => {
          return res.name === action.name;
        }),
      };
    case SELECTED_TAG:
      return {
        ...state,
        selectedTag: action.tag,
      };
    default:
      return state;
  }
};

export default resturantReducer;
