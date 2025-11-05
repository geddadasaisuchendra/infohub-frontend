const BASE_URL = "https://infohub-backend-mnuj.onrender.com"; //backend deployed to render

export async function getWeather(city) {
  const res = await fetch(`${BASE_URL}/weather?city=${city}`);
  return res.json();
}

export async function convertCurrency(amount, to) {
  const res = await fetch(`${BASE_URL}/convert?amount=${amount}&to=${to}`);
  return res.json();
}

export async function getQuote() {
  const res = await fetch(`${BASE_URL}/quote`);
  return res.json();
}
