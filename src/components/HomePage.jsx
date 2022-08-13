import React from "react";
import { Link } from "react-router-dom";
import CarouselSlider from "../common/CarouselSlider";
import CryptoCard from "./CryptoCard";
import NewsCard from "./NewsCard";

const HomePage = () => {
  return (
    <>
      <div className="carousel_container">
        <CarouselSlider />
      </div>

      <div className="crypto_currency_main">
        <div className="d-flex-between">
          <div>
            <p className="crypto_currency_header">Crypto Currency</p>
            <p className="crypto_currency_leads">Top 10 Currencies</p>
          </div>
          <div className="see_more_btn">
            <Link to="/coins">See More</Link>
          </div>
        </div>
        <CryptoCard simplified={true} />
      </div>

      <div className="news_main">
        <div className="d-flex-between">
          <div>
            <p className="news_header">Crypto News</p>
            <p className="news_leads">Top News about Cryptocurrency</p>
          </div>
          <div className="see_more_btn">
            <Link to="/news">See More</Link>
          </div>
        </div>
        <NewsCard simplified={true} />
      </div>
    </>
  );
};

export default HomePage;
