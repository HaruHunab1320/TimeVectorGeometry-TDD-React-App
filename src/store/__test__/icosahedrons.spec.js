import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import icosahedronsReducer from '../icosahedrons/reducers';
import { loadIcosahedrons } from '../icosahedrons/actions';

describe('icosahedrons', () => {
  describe('loadIcosahedrons action', () => {
    describe('when loading succeeds', () => {
      it('stores the icosahedrons', async () => {
        const records = [
          {id: 1, name: 'CREATIVE GENESIS'},
          {id: 2, name: 'PRIMAL MATRIX'},
        ];

        const api = {
          loadIcosahedrons: () => Promise.resolve(records),
        };

        const initialState = {
          records: [],
        };

        const store = createStore(
          icosahedronsReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );

        await store.dispatch(loadIcosahedrons());

        expect(store.getState().records).toEqual(records);
      });

      describe('while loading', () => {
        it('sets a loading flag', () => { 
          const api = {
            loadIcosahedrons: () => new Promise(()=> {}),
          };

          const initialState = {};

          const store = createStore(
            icosahedronsReducer,
            initialState,
            applyMiddleware(thunk.withExtraArgument(api)),
          );

          store.dispatch(loadIcosahedrons());

          expect(store.getState().loading).toEqual(true)
        });
      })
    });
  });
});