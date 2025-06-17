// // src/features/auth/services/authService.ts
// import axios from 'axios';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export interface LoginPayload {
//   emailOrusername: string;
//   password: string;
// }

// export const signup = async (data: FormData) => {
//   const res = await axios.post(`${API_URL}/api/users/register`, data, {
//     headers: { 'Content-Type': 'multipart/form-data' },
//   });
//   return res.data;
// };

// export const login = async (data: LoginPayload) => {
//   const res = await axios.post(`${API_URL}/api/users/login`, data, {
//     headers: { 'Content-Type': 'application/json' },
//   });
//   return res.data;  // نتوقع EnvelopeResponse<AuthResponse> مع التوكن في data
// };

import { api } from '../../utils/api';
export interface LoginPayload { emailOrusername: string; password: string; }
export const signup = (data: FormData) => api.post('/api/users/register', data);
export const login = (data: LoginPayload) => api.post('/api/users/login', data);