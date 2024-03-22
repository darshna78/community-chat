'use client'
import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('category1');
  const [subcategories, setSubcategories] = useState({
    category1: ['subcategory1', 'subcategory2', 'subcategory3'],
    category2: ['subcategory4', 'subcategory5', 'subcategory6'],
    category3: ['subcategory7', 'subcategory8', 'subcategory9'],
    category4: ['subcategory10', 'subcategory11', 'subcategory12'],
    category5: ['subcategory13', 'subcategory14', 'subcategory15'],
  });

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <SidebarContext.Provider value={{ activeCategory, subcategories, handleCategoryClick }}>
      {children}
    </SidebarContext.Provider>
  );
};
