'use client';

import { useState, useCallback } from 'react';
import { Achievement } from '@/functions/types/achievement';
import { handleFetchError } from '@/utils/errorHandler';

interface UseAchievementsReturn {
  data: Achievement[] | null;
  errorMessage: string | null;
  loading: boolean;
  fetchAchievements: () => Promise<void>;
}

export const useAchievements = (): UseAchievementsReturn => {
  const [data, setData] = useState<Achievement[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAchievements = useCallback(async () => {
    setLoading(true);
    setErrorMessage(null);
    
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
  }, []);

  return { data, errorMessage, loading, fetchAchievements };
};