import { Category } from '@/data-types';
import { useEffect, useState } from 'react';

export const useFetchCategory = () => {
  const [dataCategory, setDataCategory] = useState<Category | null>(null);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const result = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/category`);
        const response = await result.json();
        setDataCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCategory();
  }, []);

  return dataCategory;
};
