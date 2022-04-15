export const productReducer =
  () =>
  (state = [], action: any) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return action.payload;

      default:
        return state;
    }
  };
