import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://sae-web-elearning.directus.app/',
  headers: {
    'Content-type': 'application/json',
  },
});

export const baseApi = 'https://sae-web-elearning.directus.app/';
