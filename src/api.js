import axios from 'axios';

const client = axios.create({
  baseURL: 'localhost:3001',
});

const api = {
  loadIcosahedrons() {
    return client.get('/icoHexSequences').then(response => response.data);
  },
};

export default api;