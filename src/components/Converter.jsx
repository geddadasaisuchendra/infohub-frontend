import { useState } from "react";
import { convertCurrency } from "../api";

export default function Converter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    setError("");
    setData(null);
    try {
      const res = await convertCurrency(amount, currency);
      if (res.detail) setError(res.detail);
      else setData(res);
    } catch {
      setError("Unable to fetch conversion");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>💱 Currency Converter</h2>
      <input
        type="number"
        placeholder="Amount in INR"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <button onClick={handleConvert}>Convert</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div style={{ marginTop: "10px" }}>
          <p>
            {data.amount} INR = <strong>{data.converted}</strong> {data.to}
          </p>
          <small>Rate: {data.rate}</small>
        </div>
      )}
    </div>
  );
}
