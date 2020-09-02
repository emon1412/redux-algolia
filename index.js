import {
  initializeAlgoliaSearchState,
  postAlgoliaSearch,
  updateAlgoliaSearchFilters,
  updateAlgoliaSearchIndices,
  updateAlgoliaSearchQuery,
  clearAlgoliaSearchResult
} from './src/actions';

import algoliaSearchReducer from './src/reducer'

export default {
  initializeAlgoliaSearchState,
  postAlgoliaSearch,
  updateAlgoliaSearchFilters,
  updateAlgoliaSearchIndices,
  updateAlgoliaSearchQuery,
  clearAlgoliaSearchResult,
  algoliaSearchReducer,
}