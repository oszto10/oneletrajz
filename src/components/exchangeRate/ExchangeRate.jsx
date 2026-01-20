import React, { useEffect, useState } from "react";
import "./ExchangeRate.css";

export default function ExchangeRateValue({ handleClick, english }) {
  const [usdHuf, setUsdHuf] = useState(null);
  const [eurHuf, setEurHuf] = useState(null);
  const [rubHuf, setRubHuf] = useState(null);
  /* const [chfHuf, setChfHuf] = useState(null);
  const [gbpHuf, setGbpHuf] = useState(null);
  const [ronHuf, seRonHuf] = useState(null); */
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // 1 USD -> HUF
        setUsdHuf(data?.rates?.HUF ?? null);
      })
      .catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/EUR")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // 1 EUR -> HUF
        setEurHuf(data?.rates?.HUF ?? null);
      })
      .catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/RUB")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // 1 RUB -> HUF
        setRubHuf(data?.rates?.HUF ?? null);
      })
      .catch((e) => setError(e.message));
  }, []);

  if (error) return <div>Hiba: {error}</div>;
  if (usdHuf === null) return <div>Betöltés...</div>;
  if (eurHuf === null) return <div>Betöltés...</div>;
  if (rubHuf === null) return <div>Betöltés...</div>;

  return (
    <div className={'exchangeRate'}>
       <div className={'exchangeRateContainer'}>
          <div className={'currencyRow'}>
              <span className="currencyName">Pénznem</span> 
              <span className="currencyValue">Érték</span> 
            </div>
            <div className={'currencyRow'}>
              <span className="currencyName">Amerikai dollár</span> 
              <span className="currencyValue">{usdHuf} forint</span> 
            </div>
            <div className={'currencyRow'}>
              <span className="currencyName">Euró</span> 
              <span className="currencyValue">{eurHuf} forint</span> 
            </div>
            <div className={'currencyRow'}>
              <span className="currencyName">Orosz rubel</span> 
              <span className="currencyValue">{rubHuf} forint</span> 
            </div>
      </div>
    </div>
  );
}
