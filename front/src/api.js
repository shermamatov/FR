import axios from 'axios';

const api = axios.create({
  baseURL: 'https://itek-dev.highcat.org/api',
});

export async function fetchPhotos() {
  const { data } = await api.get('/media');
  return data;
}

export async function fetchPosts() {
  const { data } = await api.get('/blogs');
  return data;
}

export async function fetchPostById(id) {
  const { data } = await api.get(`/blog/${id}`);
  return data;
}