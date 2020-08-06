import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';

import './App.css';

import { fetchRepositories } from './actions/RepositoriesActions';

import Header from './components/container/Header/Header';
import IssueFilters from './components/container/IssueFilters/IssueFilters';
import IssueFilterSearch from './components/container/IssueFilterSearch/IssueFilterSearch';
import IssueList from './components/container/IssueList/IssueList';

const MainContainer = styled.div`
  padding: 20px 40px;
  margin-left: auto;
  margin-right: auto;
`;

const FiltersSection = styled.div`
	display: flex;
	flex-direction: row;
  margin-bottom: 16px;
  &::before {
    display: table;
    content: "";
  }
  &::after {
    display: table;
    content: "";
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepositories())
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main>
        <MainContainer>
          <FiltersSection>
            <IssueFilters />
            <IssueFilterSearch />
          </FiltersSection>
          <IssueList />
        </MainContainer>
      </main>
    </div>
  );
}

export default App;
