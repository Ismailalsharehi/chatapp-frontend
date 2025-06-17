'use client';
import React from 'react';
import { useFriends } from '../features/friends/hooks/useFriends';
import FriendListItem from '../components/FriendListItem';
import Navbar from '../components/Navbar';

export default function FriendsPage() {
  const { friends, loading, error } = useFriends();
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="p-6 flex-1 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Your Friends</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <ul className="space-y-2">
          {friends.map(f => (
            <FriendListItem key={f.id} id={f.id} username={f.username} userPicture={f.userPicture} />
          ))}
        </ul>
      </div>
    </div>
  );
}