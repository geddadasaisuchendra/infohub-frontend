import { useState } from "react";
import { getQuote } from "../api";

export default function Quotes() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    const res = await getQuote();
    setQuote(res);
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>💬 Quote of the day...</h2>
      <button onClick={fetchQuote}>
        {loading ? "Loading..." : "Get New Quote"}
      </button>
      {quote && (
        <div style={{ marginTop: "15px" }}>
          <p style={{ fontStyle: "italic" }}>"{quote.quote}"</p>
          <p>— {quote.author}</p>
        </div>
      )}
    </div>
  );
}
