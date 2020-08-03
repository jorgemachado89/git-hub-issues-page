import React from 'react';
import styled from 'styled-components';

import './App.css';

import Header from './components/presentational/Header/Header';
import IssueFilters from './components/container/IssueFilters/IssueFilters';
import IssueFilterSearch from './components/container/IssueFilterSearch/IssueFilterSearch';
import IssueList from './components/container/IssueList/IssueList';

const Main = styled.main`
  padding: 20px 40px;
  margin-left: auto;
  margin-right: auto;
`;

const FiltersSection = styled.section`
	display: flex;
	flex-direction: row;
  margin-bottom: 16px;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <FiltersSection>
          <IssueFilters />
          <IssueFilterSearch />
        </FiltersSection>
        <IssueList />
      </Main>
    </div>
  );
}

export default App;
