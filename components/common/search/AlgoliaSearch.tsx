import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('8E3TXLP4Q1', 'd3c37451a177fc93f67738eebd49816d');

// TODO: 节流
const AlgoliaSearch = () => (
  <InstantSearch indexName="posts" searchClient={searchClient}>
    <SearchBox />
    <Hits />
  </InstantSearch>
);

export default AlgoliaSearch;
