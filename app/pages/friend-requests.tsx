'use client';
import React from 'react';
import { useChats } from '../../features/chats/hooks/useChats';
import ChatListItem from '../../components/ChatListItem';
import Navbar from '../../components/Navbar';

export default function ChatsPage() {
  const { chats, loading, error } = useChats();
  if (loading) return <p>Loading chats...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="p-6 flex-1 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Chats</h1>
        <ul className="divide-y">
          {chats.map(c => <ChatListItem key={c.id} id={c.id} name={c.name} lastMessage={c.lastMessage} />)}
        </ul>
      </div>
    </div>
  );
}