export const START_LOADING = 'START_LOADING';
export const STORE_ICOSAHEDRONS = 'STORE_ICOSAHEDRONS';

export const loadIcosahedrons = () => (dispatch, getState, api) =>{
  dispatch(startLoading());
  api.loadIcosahedrons().then(records => {
    dispatch(storeIcosahedrons(records));
  });
};

const startLoading = () => ({type: START_LOADING})

const storeIcosahedrons = records => ({
  type: STORE_ICOSAHEDRONS,
  records,
});