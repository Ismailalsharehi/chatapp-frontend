'use client';
import React from 'react';
import { useMessages } from '../../features/chats/hooks/useMessages';
import MessageBubble from '../../components/MessageBubble';
import Navbar from '../../components/Navbar';

export default function ChatPage({ params }: { params: { chatId: string } }) {
  const chatId = Number(params.chatId);
  const { messages, input, setInput, post } = useMessages(chatId);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 p-4 overflow-auto flex flex-col">
        {messages.map(m => <MessageBubble key={m.id} message={m} />)}
      </div>
      <div className="p-4 flex">
        <input
          className="flex-1 p-2 border rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={post} className="ml-2 px-4 bg-blue-600 text-white rounded">Send</button>
      </div>
    </div>
  );
}