'use client';
import { useState, useEffect, useRef } from 'react';
import { getMessages, sendMessage } from '../services/chatService';
import SockJS from 'sockjs-client';
import { Client, over } from 'stompjs';

export const useMessages = (chatId: number) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const stompClient = useRef<Client | null>(null);

  useEffect(() => {
    getMessages(chatId).then(res => setMessages(res.data));

    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws`);
    stompClient.current = over(socket);
    stompClient.current.connect({}, () => {
      stompClient.current?.subscribe(`/topic/chat.${chatId}`, (msg) => {
        const body = JSON.parse(msg.body);
        setMessages(prev => [...prev, body]);
      });
      stompClient.current?.send('/app/chat.join', {}, JSON.stringify({ chatId }));
    });

    return () => { stompClient.current?.disconnect(); };
  }, [chatId]);

  const post = async () => {
    await sendMessage(chatId, input);
    setInput('');
  };

  return { messages, input, setInput, post };
};