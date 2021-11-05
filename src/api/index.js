import axios from "axios";

axios.defaults.baseURL = "https://freecurrencyapi.net/api/v2";

const API_KEY = "1b70cfb0-3cbc-11ec-ae9c-5b88affb05f5";

export const getLiveCurrencies = async (defaultCurrency) => {
  const res = await axios.get("/latest", {
    params: { apikey: API_KEY, base_currency: defaultCurrency },
  });

  return res.data.data;
};
