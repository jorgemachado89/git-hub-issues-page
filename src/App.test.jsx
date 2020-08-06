import React from 'react';
import renderer from 'react-test-renderer';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { loading, fetchedUserRepositories, fetchRepositories } from './actions/RepositoriesActions';
import repositoriesReducer from "./store/RepositoriesReducer";
import { LOADING, FETCH_REPOSITORIES } from './actions/types';

import App from './App';

describe('Given that the App component is rendered', () => {
  describe('When the component is mounted', () => {
    let store;
    let appComponent;

    beforeEach(() => {
      store = createStore(
        combineReducers({ repositoriesReducer }),
        applyMiddleware(thunk)
      );

      appComponent = renderer.create(
        <Provider store={store}>
          <App/>
        </Provider>
      );
    });

    it('Then it should fetch the repositories and update the store successfully', () => {
      expect(appComponent.toJSON()).toMatchSnapshot();
    });
  });
});

describe('Given that actions return types and payloads to dispatch', () => {
  describe('When Repositories are fetched', () => {
    it('Then it should load while fetching Repositories', () => {
      const LOADING_ACTION = {
        type: LOADING
      };

      expect(loading()).toEqual(LOADING_ACTION);
    })

    
    it('Then it should store the fetched Repositories and after stop loading', () => {
      const FETCHED_USER_REPOSITORIES_ACTION = {
        type: FETCH_REPOSITORIES,
        payload: []
      };

      expect(fetchedUserRepositories([])).toEqual(FETCHED_USER_REPOSITORIES_ACTION);
    })
  })
});

describe('Given async methods that dispatch actions', () => {

  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  describe('When Repositories are fetched', () => {
    afterEach(() => {
      fetchMock.restore();
    })

    it('Then it should start loading, fetch repositories and stop loading', () => {

      fetchMock.getOnce("https://api.github.com/users/jorgemachado89/repos", {
        body: { repositories: [] },
        headers: { 'content-type': 'application/json' }
      });

      const store = mockStore({
        isLoading: false,
        repositories: []
      });

      const expectedActions = [
        { type: LOADING },
        { type: FETCH_REPOSITORIES, payload: { repositories: [] } }
      ];

      return store.dispatch(fetchRepositories()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });

    });
  });
});