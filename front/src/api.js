import axios from 'axios';

const api = axios.create({
  baseURL: 'https://itek-dev.highcat.org/api',
});

export async function fetchPhotos() {
  const { data } = await api.get('/media');
  return data;
}
