import { api } from '../../utils/api';
export interface Friend { id: number; username: string; userPicture?: string; }
export const getFriends = () => api.get<Friend[]>('/api/friend-requests'); // actual endpoint
export const getFriendRequests = () => api.get<any[]>('/api/friend-requests');
export const acceptRequest = (id: number) => api.post(`/api/friend-requests/${id}/accept`);
export const rejectRequest = (id: number) => api.post(`/api/friend-requests/${id}/reject`);