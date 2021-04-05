

const initialState = {
   sort: 'popular',
   category: 0,
}

const filters = (state = initialState, action) => {
   if (action.type === 'SET_SORT') {
      return {
         ...state,
         sort: action.payload,
      };
   }


   if (action.type === 'SET_CATEGORY') {
      return {
         ...state,
         category: action.payload,
      };
   }
   return state;
}

export default filters;