import React from "react";
import CryptoCard from "./CryptoCard";

const CryptoCuurencies = () => {
  return (
    <div className="crypto_currency_main">
      <p className="crypto_currency_header">Crypto Currency</p>
      <p className="crypto_currency_leads">List of Crypto Currencies.</p>
      <CryptoCard simplified={false} />
    </div>
  );
};

export default CryptoCuurencies;
