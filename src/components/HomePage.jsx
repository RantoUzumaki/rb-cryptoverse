import React from "react";
import CarouselSlider from "../common/CarouselSlider";
import {
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
  useGetCryptoQuery,
} from "../services/CryptoApi";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";
import CryptoCard from "./CryptoCard";

const HomePage = () => {
  // let coinId = "Qwsogvtv82FCd";
  // const { data: cryptoDetail } = useGetCryptoDetailQuery(coinId);
  // console.log("cryptoDetail", cryptoDetail);

  // let timePeriod = "7d";
  // const { data: cryptoHistory } = useGetCryptoHistoryQuery({
  //   coinId,
  //   timePeriod,
  // });
  // console.log("cryptoHistory", cryptoHistory);

  // let news = "Crypto";
  // const { data: cryptoNews } = useGetCryptoNewsQuery({ news, count });
  // console.log("cryptoNews", cryptoNews);

  return (
    <>
      <div className="carousel_container">
        <CarouselSlider />
      </div>

      <div className="crypto_currency_main">
        <p className="crypto_currency_header">Crypto Currency</p>
        <p className="crypto_currency_leads">Top 10 Currencies</p>
        <CryptoCard simplified={true} />
      </div>
    </>
  );
};

export default HomePage;
