import axios from 'axios';

const API = axios.create({
  // Make sure to add /api at the end if your Java Controllers use that mapping!
  baseURL: 'https://zili-portal-backend-2.onrender.com/api', 
});

export default API;