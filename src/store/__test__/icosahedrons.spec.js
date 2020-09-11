import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import icosahedronsReducer from '../icosahedrons/reducers';
import { loadIcosahedrons, createIcosahedron } from '../icosahedrons/actions';

describe('icosahedrons', () => {
  describe('loadIcosahedrons action', () => {
    describe('when loading succeeds', () => {
      const records = [
        { id: 1, name: 'CREATIVE GENESIS' },
        { id: 2, name: 'PRIMAL MATRIX' },
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

      it('clears the loading flag', () => {
        expect(store.getState().loading).toEqual(false);
      });

      describe('while loading', () => {
        let store;

        beforeEach(() => {
          const api = {
            loadIcosahedrons: () => new Promise(() => {}),
          };

          const initialState = { loadError: true };

          store = createStore(
            icosahedronsReducer,
            initialState,
            applyMiddleware(thunk.withExtraArgument(api)),
          );

          store.dispatch(loadIcosahedrons());
        });

        it('sets a loading flag', () => {
          expect(store.getState().loading).toEqual(true);
        });

        it('clears the error flag', () => {
          expect(store.getState().loadError).toEqual(false);
        });
      });

      describe('when loading fails', () => {
        let store;

        beforeEach(() => {
          const api = {
            loadIcosahedrons: () => Promise.reject(),
          };

          const initialState = {};

          store = createStore(
            icosahedronsReducer,
            initialState,
            applyMiddleware(thunk.withExtraArgument(api)),
          );

          return store.dispatch(loadIcosahedrons());
        });

        it('sets an error flag', () => {
          expect(store.getState().loadError).toEqual(true);
        });

        it('clears the loading flag', () => {
          expect(store.getState().loading).toEqual(false);
        });
      });
    });

    describe('createIcosahedron action', () => {
      const newIcosahedronName = 'FRESH START';
      const existingIcosahedron = { id: 1, name: 'CREATIVE GENESIS' };
      const responseIcosahedron = { id: 2, name: newIcosahedronName };

      let api;
      let store;

      beforeEach(() => {
        api = {
          createIcosahedron: jest.fn().mockName('createIcosahedron'),
        };

        const initialState = { records: [existingIcosahedron] };

        store = createStore(
          icosahedronsReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );
      });

      it('saves the icosahedron to the server', () => {
        api.createIcosahedron.mockResolvedValue(responseIcosahedron);
        store.dispatch(createIcosahedron(newIcosahedronName));
        expect(api.createIcosahedron).toHaveBeenCalledWith(newIcosahedronName);
      });

      describe('when save succeeds', () => {
        beforeEach(() => {
          api.createIcosahedron.mockResolvedValue(responseIcosahedron);
          store.dispatch(createIcosahedron(newIcosahedronName));
        });

        it('stores the returned iscosahedron in the store', () => {
          expect(store.getState().records).toEqual([
            existingIcosahedron,
            responseIcosahedron,
          ]);
        });
      });
    });
  });

  describe('initially', () => {
    let store;

    beforeEach(() => {
      const initialState = {};

      store = createStore(
        icosahedronsReducer,
        initialState,
        applyMiddleware(thunk),
      );
    });

    it('does not have the loading flag set', () => {
      expect(store.getState().loading).toEqual(false);
    });

    it('does not have the error flag set', () => {
      expect(store.getState().loadError).toEqual(false);
    });
  });
});
