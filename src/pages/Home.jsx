import React from "react";

import "../assets/scss/customs/Home.scss";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResult from "../components/SearchResult/SearchResult";

const Home = () => {
  return (
    <div className="home">
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default Home;
