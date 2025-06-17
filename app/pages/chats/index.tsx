'use client';
import React from 'react';
import { useChats } from '../../features/chats/hooks/useChats';
import ChatListItem from '../../components/ChatListItem';

export default function ChatsPage() {
  const { chats, loading, error } = useChats();

  if (loading) return <p>Loading chats...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Your Chats</h1>
      {chats.map(c => <ChatListItem key={c.id} chat={c} />)}
    </div>
  );
}