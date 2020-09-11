export const START_LOADING = 'START_LOADING';
export const STORE_ICOSAHEDRONS = 'STORE_ICOSAHEDRONS';
export const RECORD_LOADING_ERROR = 'RECORD_LOADING_ERROR';
export const ADD_ICOSAHEDRON = 'ADD_ICOSAHEDRON';

export const loadIcosahedrons = () => (dispatch, getState, api) => {
  dispatch(startLoading());
  api
    .loadIcosahedrons()
    .then(records => {
      dispatch(storeIcosahedrons(records));
    })
    .catch(() => {
      dispatch(recordLoadingError());
    });
};

const startLoading = () => ({ type: START_LOADING });

const storeIcosahedrons = records => ({
  type: STORE_ICOSAHEDRONS,
  records,
});

const recordLoadingError = () => ({ type: RECORD_LOADING_ERROR });

export const createIcosahedron = name => (dispatch, getState, api) => {
  api.createIcosahedron(name).then(record => {
    dispatch(addIcosahedron(record));
  });
};

const addIcosahedron = record => ({
  type: ADD_ICOSAHEDRON,
  record,
});
