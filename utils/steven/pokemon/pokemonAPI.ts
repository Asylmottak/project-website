const axios = require("axios");

export const getPokemonFromApi = async (url: string) => {
  const response = await Promise.resolve(axios.get(url));
  return response.data;
};

export const getAbilityFromApi = async (url: string) => {
  const response = await Promise.resolve(axios.get(url));
  return response.data;
};
