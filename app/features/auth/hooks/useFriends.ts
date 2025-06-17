'use client';
import { useState, useEffect } from 'react';
import { getFriends } from '../services/friendService';
import { Friend } from '../services/friendService';

export const useFriends = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getFriends()
      .then(res => setFriends(res.data))
      .catch(e => setError('Failed to load friends'))
      .finally(() => setLoading(false));
  }, []);

  return { friends, loading, error };
};