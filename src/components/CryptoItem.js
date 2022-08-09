import React from "react";
import './css/CryptoItem.css';

export default function CryptoItem(props) {

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img alt="crypto" src={props.coinData.image} />
          <h1>{props.coinData.id}</h1>
          <p className="coin-symbol">{props.coinData.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{props.coinData.current_price}</p>
          <p className="coin-percent green">{props.coinData.price_change_percentage_24h}</p>
          <p className="coin-marketcap">{props.coinData.market_cap}</p>
        </div>
      </div>
    </div>
  )
} 