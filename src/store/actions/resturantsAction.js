import {
  GET_RESTURANTS,
  GET_RESTURANTS_TAGS,
  ADD_RESTURANTS,
  GET_RESTURANT,
  GET_ALL_RESTURANTS,
  SELECTED_TAG,
} from './actionTypes';

export const getResturants = resturants => {
  return {
    type: GET_ALL_RESTURANTS,
    brands: resturants,
  };
};

export const getResturantsTags = tags => {
  return {
    type: GET_RESTURANTS_TAGS,
    tags: tags,
  };
};

export const addResturant = resturant => {
  return {
    type: ADD_RESTURANTS,
    resturant: resturant,
  };
};

export const getResturant = name => {
  return {
    type: GET_RESTURANT,
    name: name,
  };
};

export const selectTag = tagName => {
  return {
    type: SELECTED_TAG,
    tag: tagName,
  };
};
