import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import icosahedronsReducer from '../icosahedrons/reducers';
import { loadIcosahedrons } from '../icosahedrons/actions';

describe('icosahedrons', () => {
  describe('loadIcosahedrons action', () => {
    describe('when loading succeeds', () => {
      const records = [
        {id: 1, name: 'CREATIVE GENESIS'},
        {id: 2, name: 'PRIMAL MATRIX'},
      ];

      let store;

      beforeEach(() => {
        
        const api = {
          loadIcosahedrons: () => Promise.resolve(records),
        };
      
        const initialState = {
          records: [],
        };
      
        store = createStore(
          icosahedronsReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );
        
        return store.dispatch(loadIcosahedrons());
      });


      it('stores the icosahedrons', () => {
        expect(store.getState().records).toEqual(records);
      });

      it('clears the loading flag',()=>{
        expect(store.getState().loading).toEqual(false);
      });

      describe('while loading', () => {
        it('sets a loading flag', () => { 
          const api = {
            loadIcosahedrons: () => new Promise(()=> {}),
          };

          const initialState = {};

          store = createStore(
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