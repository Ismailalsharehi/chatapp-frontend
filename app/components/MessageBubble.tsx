'use client';
import React from 'react';

interface Props { message: { sender: { id: number; username: string; }; content: string; timestamp: string; }; }
export default function MessageBubble({ message }: Props) {
  const isSelf = false; // compare message.sender.id with current user id
  return (
    <div className={`my-2 p-3 rounded-lg max-w-xs ${isSelf ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 self-start'}`}>
      <p className="text-sm">{message.content}</p>
      <span className="text-xs text-gray-600 block text-right">{new Date(message.timestamp).toLocaleTimeString()}</span>
    </div>
  );
}