import apiClient from './client';

const authApi = {
  login: (credentials) => apiClient.post('/auth/login', credentials),
  me: () => apiClient.get('/auth/me'),
};

export default authApi;
