'use client';

import { useState, useEffect } from 'react';
import { Achievement } from '@/functions/types/achievement';
import { handleFetchError } from '@/utils/errorHandler';

export const useAchievements = () => {
  const [data, setData] = useState<Achievement[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2937';
        const response = await fetch(`${apiUrl}/api/profile/achievement`);

        if (response.ok) {
          const achievements = await response.json();
          setData(achievements);
          setErrorMessage(null);
        } else {
          setErrorMessage(handleFetchError(response));
          setData(null);
        }
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  return { data, errorMessage, loading };
};