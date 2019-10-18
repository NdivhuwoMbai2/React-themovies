import * as actionTypes from "../constants/types";

// export default (state = [], action) => {
//   switch (action.type) {
//     case actionTypes.CREATE_NEW_CONTACT:
//           return [...state, Object.assign({}, action.contact)];
//       case actionTypes.FETCH_DETAILS:
//           return [...state,action.contact]
//     default:
//       return state;
//   }
// };

const INITIAL_STATE = {
  products: [],
  compare: false,
  movies:[]
};

export default function(state = INITIAL_STATE, action) {
  console.log(action, "testing");
  switch (action.type) {
    case actionTypes.FETCH_MOVIES:
      return {
        ...state,
        products: action.payload.map(product => ({
          ...product,
          compare: false
        }))
      };

    case actionTypes.FETCH_DETAILS:
      return {
        ...state,
        products: action.payload.content,
        compare: false
      };
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.content,
        compare: false
      }; 
    case actionTypes.ADD_TODO:
      
      console.log(state, "test2");
      return {
        ...state,
        movies: action.payload.content,
        compare: true
      };
    default:
      return state;
    // case types.COMPARE_PRODUCT:
    //   return {
    //     ...state,
    //     products:
    //       state.products.map(product =>
    //         product.id === action.product.id
    //           ? ({ ...product, compare: !product.compare }) :
    //         product
    //     )
    //   };
  }
}
