import algoliasearch from 'algoliasearch/lite';
import { FC } from 'react';

import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { algoliaAppId, algoliaClientKey } from '../../../utils/constants';
import Mask from '../Mask';

const searchClient = algoliasearch(algoliaAppId, algoliaClientKey);

export type AlgoliaSearchProps = {
  show: boolean;
  toggleShow: any;
};

const HitComponent = ({ hit }) => {
  return <span>{hit.title}</span>;
};

// TODO: 节流搜索
const AlgoliaSearch: FC<AlgoliaSearchProps> = ({ show, toggleShow }) => {
  return (
    <>
      <Mask show={show} className="bg-opacity-40 backdrop-filter backdrop-blur-lg">
        <div className="w-96">
          <InstantSearch indexName="posts" searchClient={searchClient}>
            <SearchBox />
            <Hits hitComponent={HitComponent} />
          </InstantSearch>
          <button onClick={toggleShow}>close</button>
        </div>
      </Mask>
    </>
  );
};

export default AlgoliaSearch;
