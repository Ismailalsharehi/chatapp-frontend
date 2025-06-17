'use client';
import { useState, useEffect } from 'react';
import { getMessages, sendMessage } from '../services/chatService';

export const useMessages = (chatId: number) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    getMessages(chatId).then(res => setMessages(res.data));
    // WebSocket subscribe logic here
  }, [chatId]);

  const post = async () => {
    const res = await sendMessage(chatId, input);
    setMessages(prev => [...prev, res.data]);
    setInput('');
  };

  return { messages, input, setInput, post };
};