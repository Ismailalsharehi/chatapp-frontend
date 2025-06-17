import { api } from '../../utils/api';
export interface Chat { id: number; name?: string; lastMessage?: any; }
export const getChats = () => api.get<Chat[]>('/api/chats');
export const createPrivateChat = (userId: number) => api.post<Chat>(`/api/chats`, { type: 'PRIVATE', participantIds: [userId] });
export const getMessages = (chatId: number) => api.get<any[]>(`/api/chats/${chatId}/messages`);
export const sendMessage = (chatId: number, content: string) => api.post<any>(`/api/chats/${chatId}/messages`, { content, messageType: 'CHAT' });