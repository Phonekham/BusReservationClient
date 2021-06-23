import React from "react";
import { useLazyQuery } from "@apollo/client";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "../assets/scss/customs/Home.scss";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResult from "../components/SearchResult/SearchResult";
import { useStateValue } from "../context/queryRoute/provider";
import { CHECK_DEPAERTURE_TIME } from "../graphql/queries";

const Home = () => {
  const [routeData, dispatch] = useStateValue();
  const { departureDate, seatQty, route } = routeData;

  const [checkQueryRoute, { data, loading }] = useLazyQuery(
    CHECK_DEPAERTURE_TIME,
    {
      variables: { departureDate, seatQty, route },
      fetchPolicy: "network-only",
      onError(err) {
        console.log(err);
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkQueryRoute();
  };

  return (
    <div className="home">
      <SearchBar handleSubmit={handleSubmit} />
      {loading ? (
        <div className="text-center">
          <Loader type="Circles" color="#fff" height={300} width={300} />
        </div>
      ) : data ? (
        <SearchResult data={data} />
      ) : null}
    </div>
  );
};

export default Home;
