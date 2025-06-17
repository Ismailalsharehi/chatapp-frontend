'use client';
import { useState, useEffect } from 'react';
import { getChats, Chat } from '../services/chatService';

export const useChats = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getChats()
      .then(res => setChats(res.data))
      .catch(() => setError('Failed to load chats'))
      .finally(() => setLoading(false));
  }, []);

  return { chats, loading, error };
};