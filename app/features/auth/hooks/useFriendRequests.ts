'use client';
import { useState, useEffect } from 'react';
import { getFriendRequests, acceptRequest, rejectRequest } from '../services/friendService';

export const useFriendRequests = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getFriendRequests()
      .then(res => setRequests(res.data))
      .catch(() => setError('Failed to load requests'))
      .finally(() => setLoading(false));
  }, []);

  const accept = async (id: number) => {
    await acceptRequest(id);
    setRequests(prev => prev.filter(r => r.id !== id));
  };

  const reject = async (id: number) => {
    await rejectRequest(id);
    setRequests(prev => prev.filter(r => r.id !== id));
  };

  return { requests, loading, error, accept, reject };
};