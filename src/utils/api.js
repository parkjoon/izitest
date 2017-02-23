import axios from 'axios';

const baseUrl = 'https://dev.requiemapp.com';

export function getMemorials() {
	return axios.get(`${baseUrl}/public/memorial/random`);
}
