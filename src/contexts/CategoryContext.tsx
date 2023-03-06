import { object } from 'prop-types';
import React, { createContext, useState } from 'react';

type CategoryContextType = {
  selectedCategory: number | null;
  setSelectedCategory: (category: number | null) => void;
};

export const CategoryContext = createContext<CategoryContextType>({
  selectedCategory: null,
  setSelectedCategory: () => object,
});

type Props = {
  children: React.ReactNode;
};

export const CategoryProvider = ({ children }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
