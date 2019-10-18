import * as actionTypes from "../constants/types";

let nextTodoId = 0;
export const addTodo = content => ({  
         type: actionTypes.ADD_TODO,
         payload: {
           id: ++nextTodoId,
           content:content
         }
       });

export const createContact = contact => {
  return {
    type: actionTypes.CREATE_NEW_CONTACT,
    contact: contact
  };
};

export const getProducts = () => dispatch => {
  fetch(`http://demo9595712.mockable.io/getTopFiveMovies`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: data
      })
    )
    .catch(error => ({ error, isLoading: false }));
};
