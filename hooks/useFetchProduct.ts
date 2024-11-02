import { Product } from '@/data-types';
import { useEffect, useState } from 'react';

export const useFetchProduct = () => {
  const [dataProduct, setDataProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const result = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/product`);
        const response = await result.json();
        setDataProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct();
  }, []);

  return dataProduct;
};
