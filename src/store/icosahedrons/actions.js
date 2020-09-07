export const STORE_ICOSAHEDRONS = 'STORE_ICOSAHEDRONS';

export const loadIcosahedrons = () => (dispatch, getState, api) =>{
  api.loadIcosahedrons().then(records => {
    dispatch(storeIcosahedrons(records));
  });
};

const storeIcosahedrons = records => ({
  type: STORE_ICOSAHEDRONS,
  records,
});