'use client';

import useSWR from 'swr';
import axios, { isAxiosError } from 'axios';
import { AchievementDetailProps, Achievement } from './type';

interface UseGetDetailAchievementReturn {
  data: Achievement | undefined;
  error: Error | undefined;
  isLoading: boolean;
  mutate: () => Promise<Achievement | undefined>;
}

export const useGetDetailAchievement = ({
  id,
}: AchievementDetailProps): UseGetDetailAchievementReturn => {
  const fetcher = async (url: string) => {
    try {
      const response = await axios.post<Achievement>(url, {
        id,
      });
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'データの取得に失敗しました',
        );
      }
      throw error;
    }
  };

  const { data, error, isLoading, mutate } = useSWR(
    id ? `/api/profile/achievement/${id}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
