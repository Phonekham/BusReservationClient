import React from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import SearchResult from "../components/SearchResult/SearchResult";

const SearchResults = (props) => {
  const { state } = props.location;
  return (
    <div>
      <SearchBar />
      <SearchResult data={state} />
    </div>
  );
};

export default SearchResults;
