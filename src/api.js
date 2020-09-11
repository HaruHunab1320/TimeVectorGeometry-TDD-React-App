import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001',
});

const api = {
  loadIcosahedrons() {
    return client.get('/icoHexSequences').then(response => response.data);
  },
  createIcosahedron(name) {
    return client
      .post('/icoHexSequences', { name })
      .then(response => response.data);
  },
};

export default api;
