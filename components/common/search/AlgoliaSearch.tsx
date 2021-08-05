import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const appId = process.env.ALGOLIA_ID;
const clientKey = process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_KEY;

const searchClient = algoliasearch(appId, clientKey);

// TODO: 节流
const AlgoliaSearch = () => (
  <InstantSearch indexName="posts" searchClient={searchClient}>
    <SearchBox />
    <Hits />
  </InstantSearch>
);

export default AlgoliaSearch;
