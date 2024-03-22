// CategoryContext.js
'use client'
import React, { createContext, useState } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('category1');
  const subcategories = {
    category1: ['subcategory1', 'subcategory2', 'subcategory3','subcategory4','subcategory5'],
    category2: ['subcategory1', 'subcategory2', 'subcategory3', 'subcategory4', 'subcategory5', 'subcategory6'],
    category3: ['subcategory1', 'subcategory2', 'subcategory3','subcategory4'],
    category4: ['subcategory1', 'subcategory2', 'subcategory3'],
    category5: ['subcategory1', 'subcategory2', 'subcategory3','subcategory4','subcategory5'],
  };

  return (
    <CategoryContext.Provider value={{ activeCategory, setActiveCategory, subcategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
