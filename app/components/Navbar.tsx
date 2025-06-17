'use client';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link href="/dashboard" className="font-bold text-xl">ChatApp</Link>
      <div className="space-x-4">
        <Link href="/friends">Friends</Link>
        <Link href="/friend-requests">Requests</Link>
        <Link href="/chats">Chats</Link>
        <button onClick={() => {/* logout logic */}} className="text-red-500">Logout</button>
      </div>
    </nav>
  );
}