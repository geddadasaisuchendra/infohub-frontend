const BASE_URL = "http://127.0.0.1:8000"; // Change to your deployed backend URL later

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
