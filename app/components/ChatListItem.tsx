'use client';
import React from 'react';
import Link from 'next/link';

interface Props { id: number; name?: string; lastMessage?: { content: string; senderName: string; }; }
export default function ChatListItem({ id, name, lastMessage }: Props) {
  return (
    <li className="p-4 border-b hover:bg-gray-50">
      <Link href={`/chats/${id}`} className="flex flex-col">
        <span className="font-semibold">{name || 'Private Chat'}</span>
        {lastMessage && (
          <span className="text-sm text-gray-500">{lastMessage.senderName}: {lastMessage.content}</span>
        )}
      </Link>
    </li>
  );
}