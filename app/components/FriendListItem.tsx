'use client';
import React from 'react';
import { Button } from './Button';
import { createPrivateChat } from '../features/chats/services/chatService';
import { useRouter } from 'next/navigation';

interface Props { id: number; username: string; userPicture?: string; }
export default function FriendListItem({ id, username, userPicture }: Props) {
  const router = useRouter();
  const handleChat = async () => {
    const res = await createPrivateChat(id);
    router.push(`/chats/${res.data.id}`);
  };
  return (
    <li className="flex items-center justify-between p-4 border rounded">
      <div className="flex items-center">
        <img src={userPicture || '/default.png'} alt={username} className="w-10 h-10 rounded-full mr-3" />
        <span>{username}</span>
      </div>
      <Button onClick={handleChat}>Chat</Button>
    </li>
  );
}