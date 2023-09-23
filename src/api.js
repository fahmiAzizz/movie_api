import axios from "axios";

export const findMovie = async (q) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=649df09a1814bf6cf352af606c2923b2`)
    return response.data.results
}
  
export const getMovie = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=649df09a1814bf6cf352af606c2923b2`);
    return response.data.results;
}