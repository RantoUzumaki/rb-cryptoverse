/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useGetCryptoQuery } from "../services/CryptoApi";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";
import Loader from "../common/Loader";
import Dropdown from "../common/Dropdown";
import NoDataFound from "../common/NoDataFound";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const NewsCard = ({ simplified }) => {
  let count = simplified ? 10 : 10000;
  const [newsCategory, setnewsCategory] = useState("cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count });
  const { data: coins } = useGetCryptoQuery(100);
  let coindata = coins?.data?.coins;

  let coinArray = [];

  useEffect(() => {
    let coin;
    for (coin in coindata) {
      coinArray.push(coindata[coin].name);
    }
  }, [coinArray, coindata, newsCategory]);

  if (!cryptoNews?.value) return <Loader />;

  let newsdata = cryptoNews?.value;

  return (
    <>
      {!simplified && (
        <div className="crypto-search-container">
          <Dropdown
            select={newsCategory}
            setSelect={setnewsCategory}
            dropdownOptions={coinArray}
          />
        </div>
      )}
      {newsdata.length > 0 ? (
        <div className="news_card_container">
          {newsdata?.map((news) => (
            <a key={news.url} href={news.url} target="_blank" rel="noreferrer">
              <div className="news_card">
                <div className="news_image_contianer">
                  <p>
                    {news.name.length > 50
                      ? `${news.name.substring(0, 50)}...`
                      : news.name}
                  </p>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </div>
                <p className="news_description">
                  {news.description.length > 100
                    ? `${news.description.substring(0, 80)}...`
                    : news.description}
                </p>
                <div className="news_provider">
                  <img
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="news"
                  />
                  <p>
                    {news.provider[0].name.length > 10
                      ? `${news.provider[0].name.substring(0, 10)}...`
                      : news.provider[0].name}
                  </p>
                </div>
                <p className="date_published">
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default NewsCard;
