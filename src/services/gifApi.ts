import axios from 'axios';

const BASE_URL = 'http://localhost:9926'; // Base URL for your backend

// Function to search GIFs by a query string
export const searchGifs = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/GifsSearch/${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    throw error;
  }
};

// Function to return Rankings for gifs
export const getRanks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/GifRankings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Rankings:', error);
    throw error;
  }
};

// Function to select a gif by ID
export const selectGif = async (gifId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/GifById/${gifId}`);
    return {
      ...response.data,
      preview_url: response?.data.images.original.url
    };
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    throw error;
  }
}
