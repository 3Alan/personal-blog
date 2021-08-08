import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { algoliaAppId, algoliaClientKey } from '../../../utils/constants';

const searchClient = algoliasearch(algoliaAppId, algoliaClientKey);

// TODO: 节流
const AlgoliaSearch = () => (
  <InstantSearch indexName="posts" searchClient={searchClient}>
    <SearchBox />
    <Hits />
  </InstantSearch>
);

export default AlgoliaSearch;
