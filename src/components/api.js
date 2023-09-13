import axios from 'axios';

export async function fetchImages(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '39397870-fc5d42a9a7ddd9b0b461442fe';
  const URL = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(URL);
  console.log(response.data);
  return response.data;
}
console.log(fetchImages());
