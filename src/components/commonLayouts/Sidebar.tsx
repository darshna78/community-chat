// 'use client'
// import { useContext, useState } from 'react';
// import custom from '../custom.module.css';
// import Image from 'next/image';
// import menuIcon from '../../../public/Images/menuIcon.svg';
// import CategoryContext from './CategoryContext';
// import { Router } from 'next/navigation';

// const Sidebar = () => {
//   const { activeCategory, setActiveCategory, subcategories } = useContext(CategoryContext);
//   const [show,setShow] = useState(false)
  
//   const handleCategoryClick = (category) => {
//     setActiveCategory(category === activeCategory ? null : category);  
      
//   };
//     function showSidebar() {
//     setShow(!show);
//   }

//   return (
//     <div>
   

//        <button onClick={showSidebar} className={custom.toggleButton}>
//         <Image width={20} height={20} src={menuIcon} />
//       </button>

//       <div style={{ display: show ? 'block' : ''}}  className={custom.sidebar}>
//         <div className={custom.sidebarContent}>
//           {Object.keys(subcategories).map((category) => (
//             <div key={category}>
//               <p
//                 className={activeCategory === category ? custom.activeCategory : custom.catrgory}
//                 onClick={() => handleCategoryClick(category)}
//               >
//                 {category}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// Sidebar.tsx

'use client'
import React, { useContext, useState } from 'react';
import custom from '../custom.module.css';
import Image from 'next/image';
import menuIcon from '../../../public/Images/menuIcon.svg';
import { CategoryContext } from './CategoryContext';

const Sidebar = () => {
  const { activeCategory, setActiveCategory, subcategories } = useContext(CategoryContext);
  const [show, setShow] = useState<boolean>(false);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === activeCategory ? '' : category);  
  };

  const showSidebar = () => {
    setShow(!show);
  };

  return (
    <div>
      <button type='button' onClick={showSidebar} className={custom.toggleButton} title='show sidebar'>
        <Image width={20} height={20} src={menuIcon} alt='menuIcon' />
      </button>

      <div style={{ display: show ? 'block' : '' }} className={custom.sidebar}>
        <div className={custom.sidebarContent}>
          {Object.keys(subcategories).map((category) => (
            <div key={category}>
              <p
                className={activeCategory === category ? custom.activeCategory : custom.category} 
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
