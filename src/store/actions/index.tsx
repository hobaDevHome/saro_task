import getData from '../api/axios';

export const fetchProdcuts = () => async (dispatch: any) => {
  const respose = await getData.get('./products');
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: respose.data,
  });
};
