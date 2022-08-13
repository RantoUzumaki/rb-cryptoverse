import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { millify } from "millify";
import Loader from "../common/Loader";
import LineChart from "./LineChart";
import { MdOutlineClose } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import {
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
} from "../services/CryptoApi";
import Dropdown from "../common/Dropdown";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });

  const coinDetail = data?.data?.coin;

  if (isFetching) return <Loader />;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coinDetail?.price && millify(coinDetail?.price)}`,
    },
    { title: "Rank", value: coinDetail?.rank },
    {
      title: "24h Volume",
      value: `$ ${coinDetail["24hVolume"] && millify(coinDetail["24hVolume"])}`,
    },
    {
      title: "Market Cap",
      value: `$ ${coinDetail?.marketCap && millify(coinDetail?.marketCap)}`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        coinDetail?.allTimeHigh?.price &&
        millify(coinDetail?.allTimeHigh?.price)
      }`,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coinDetail?.numberOfMarkets,
    },
    {
      title: "Number Of Exchanges",
      value: coinDetail?.numberOfExchanges,
    },
    {
      title: "Aprroved Supply",
      value: coinDetail?.supply?.confirmed ? <TiTick /> : <MdOutlineClose />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        coinDetail?.supply?.total && millify(coinDetail?.supply?.total)
      }`,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coinDetail?.supply?.circulating &&
        millify(coinDetail?.supply?.circulating)
      }`,
    },
  ];

  return (
    <div className="coin_container">
      <div className="coin_head">
        <div className="coin_head_sub">
          <p>
            {coinDetail.name} ({coinDetail.symbol})
          </p>
          <p>
            {coinDetail.name} live price in US Dollar (USD). View value
            statistics, market cap and supply.
          </p>
        </div>
        <div className="coin_head_dropdown">
          <Dropdown
            select={timePeriod}
            setSelect={setTimePeriod}
            dropdownOptions={time}
          />
        </div>
      </div>

      {/* <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(coinDetail.price)}
        coinName={coinDetail.name}
      /> */}

      <div className="stats_container">
        <div className="coin_stats">
          <div className="coin_stats_head">
            <p className="coin_details_heading">
              {coinDetail.name} Value Statistics
            </p>
            <p>
              An overview showing the statistics of {coinDetail.name}, such as
              the base and quote currency, the rank, and trading volume.
            </p>
          </div>
          <div className="coin_stats_body">
            {stats.map(({ title, value }) => (
              <div key={title}>
                <div className="coin_stats_t1">
                  <p>{title}</p>
                </div>
                <div className="coin_stats_t2">
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="other_stats_info">
          <div className="other_stats_head">
            <p className="other_stats_heading">
              {coinDetail.name} Other Stats Info
            </p>
            <p>
              An overview showing the statistics of {coinDetail.name}, such as
              the base and quote currency, the rank, and trading volume
            </p>
          </div>
          <div className="other_stats_body">
            {genericStats.map(({ title, value }) => (
              <div key={title}>
                <div className="other_stats_t1">
                  <p>{title}</p>
                </div>
                <div className="other_stats_t2">
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="coin_desc_link">
        <div className="coin_desc_head">
          <h3>What is {coinDetail.name}?</h3>
          {HTMLReactParser(coinDetail.description)}
        </div>

        <div className="coin_links">
          <p className="coin_link_head">{coinDetail.name} Links</p>
          <p className="lead_words">
            List of all websites that you can refer for future use.
          </p>
          {coinDetail.links?.map((link) => (
            <div key={link.url} className="coin_link_sec">
              <p>{link.type}</p>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
