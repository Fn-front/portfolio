// 'use client';

// import useSWR from 'swr';
// import axios from 'axios';
// import { Achievement } from './type';

// export const useGetAchievement = () => {
//   const fetcher = async (url: string) => {
//     const response = await axios.get<Achievement[]>(url);
//     return response.data;
//   };

//   const { data, error, isLoading, mutate } = useSWR(
//     '/api/profile/achievement',
//     fetcher,
//     {
//       revalidateOnFocus: false,
//       revalidateOnReconnect: false,
//     },
//   );

//   return {
//     data,
//     error,
//     isLoading,
//     mutate,
//   };
// };
