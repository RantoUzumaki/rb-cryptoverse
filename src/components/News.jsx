import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div>
      <div className="news_main">
        <p className="news_header">Crypto News</p>
        <p className="news_leads">List of news about Crypto Currencies.</p>
        <NewsCard simplified={false} />
      </div>
    </div>
  );
};

export default News;
