// CategoryContext.tsx
'use client'
import React, { createContext, useState, ReactNode } from 'react';

interface CategoryContextType {
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  subcategories: { [key: string]: string[] };
}

const initialSubcategories = {
  category1: ['subcategory1', 'subcategory2', 'subcategory3', 'subcategory4', 'subcategory5'],
  category2: ['subcategory1', 'subcategory2', 'subcategory3', 'subcategory4', 'subcategory5', 'subcategory6'],
  category3: ['subcategory1', 'subcategory2', 'subcategory3', 'subcategory4'],
  category4: ['subcategory1', 'subcategory2', 'subcategory3'],
  category5: ['subcategory1', 'subcategory2', 'subcategory3', 'subcategory4', 'subcategory5'],
};

export const CategoryContext = createContext<CategoryContextType>({
  activeCategory: 'category1',
  setActiveCategory: () => {},
  subcategories: initialSubcategories,
});

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider : React.FC<CategoryProviderProps> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState<string>('category1');

  return (
    <CategoryContext.Provider value={{ activeCategory, setActiveCategory, subcategories: initialSubcategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
