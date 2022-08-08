import React, { useEffect, useState } from "react";
import { useGetCryptoQuery } from "../services/CryptoApi";
import Loader from "../common/Loader";
import { Link } from "react-router-dom";
import millify from "millify";
import Dropdown from "../common/Dropdown";

const CryptoCard = ({ simplified }) => {
  let count = simplified ? 10 : 100;
  const { data: coins, isFetching } = useGetCryptoQuery(count);
  const [coinData, setCoinData] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("Default");

  let coindata = coins?.data?.coins;

  useEffect(() => {
    setCoinData(coindata);
    const filteredData = coindata?.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
    setCoinData(filteredData);
    setSelected("Default")
  }, [coindata, search]);

  useEffect(() => {
    selected === "Default" && setCoinData(coindata);
    selected === "Alphabatical A-Z" &&
      setCoinData(
        [...coindata].sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        )
      );

    selected === "Alphabatical Z-A" &&
      setCoinData(
        [...coindata].sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
        )
      );

    selected === "Price L-H" &&
      setCoinData(
        [...coindata].sort((a, b) =>
          parseFloat(a.price) > parseFloat(b.price) ? 1 : -1
        )
      );

    selected === "Price H-L" &&
      setCoinData(
        [...coindata].sort((a, b) =>
          parseFloat(a.price) < parseFloat(b.price) ? 1 : -1
        )
      );
  }, [selected, coindata]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified ? (
        <div className="crypto-search-container">
          <Dropdown select={selected} setSelect={setSelected} />
          <input
            className="crypto-search"
            type="text"
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
      ) : null}
      <div className="crypto_card_container">
        {coinData?.map((e) => (
          <Link key={e.rank} to={`/coins/${e.uuid}`}>
            <div
              style={
                e.color === null || e.color === ""
                  ? { "--color": "#001920" }
                  : { "--color": e.color }
              }
              className="crypto_card"
            >
              <div className="coin_image">
                <img src={e.iconUrl} alt="ICON" />
              </div>
              <div className="crypto_card_details">
                <div className="crypto_header">{e.name}</div>
                <div className="crypto_price">Price - ${millify(e.price)}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CryptoCard;
