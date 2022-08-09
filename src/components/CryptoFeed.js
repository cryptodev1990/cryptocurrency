import React, { useEffect, useState } from "react";
import CryptoItem from "./CryptoItem";
import axios from "axios";
import './css/Search.css';

export const CryptoFeed = () => {

  const [searchWord, setSearchWord] = useState('');

  const [coinDatas, setCoinDatas] = useState([]);
  
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(({ data }) => {
        setCoinDatas(data);
        setTemp(data);
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  console.log(searchWord);

  const onChange = (e) => {
    setSearchWord(e.target.value);
    setTemp(coinDatas.filter(coinData => coinData.id.includes(searchWord)));
  }

  return (
    <div>
      <div className="coin-search">
        <form>
          <input type="text" name="search" className="coin-input" onChange={onChange} placeholder="Provide the coin and name" value={searchWord}/>
        </form>
      </div>
      {coinDatas.filter(coinData => coinData.id.includes(searchWord)).map((coinData) =>
        <CryptoItem key={coinData.id} coinData={coinData} />
      )}
    </div>
  )
}