// 'use client'
// import custom from '../custom.module.css'
// import Image from 'next/image';
// import demoImg from '../../../public/Images/demoImg.jpg'
// import demoImg1 from '../../../public/Images/demoImg1.jpg'
// import RelatedQuestion from './RelatedQuestion'
// import { useContext } from 'react';
// import CategoryContext from './CategoryContext'; // Assuming you have CategoryContext defined as shown in the previous response
// import Link from 'next/link';

// const SideArea = () => {
//   const { activeCategory, subcategories } = useContext(CategoryContext);
//     return (
     
//       <div className={`${custom.sideArea} ${custom.rightmost }`}>
//         <div className={custom.sideAreaContent}>
          
//         <Image  src={demoImg1} 
//           layout='responsive'
//           className={custom.poster}
          
//          />
//          <Image  src={demoImg} 
//          layout='responsive'
//           className={custom.poster}
//          />
         
//           <RelatedQuestion />
          
//           {activeCategory && (
//           <div className={custom.subcategories}>
//               <p>subcategories of {activeCategory}</p>
//             {subcategories[activeCategory].map((subcategory, index) => (
//               <div className={custom.subcategory}><Link href={'/'} key={index}>{subcategory}</Link></div>
//             ))}
//             {/* <RelatedQuestion /> */}
//           </div>
//         )}
        
         
//         </div>
       
//       </div>
//     );
//   };
  
 
  

//   export default SideArea;



// SideArea.tsx
'use client'
import React, { useContext } from 'react';
import custom from '../custom.module.css';
import Image from 'next/image';
import demoImg from '../../../public/Images/demoImg.jpg';
import demoImg1 from '../../../public/Images/demoImg1.jpg';
import RelatedQuestion from './RelatedQuestion';
import { CategoryContext } from './CategoryContext';
import Link from 'next/link';

const SideArea = () => {
  const { activeCategory, subcategories } = useContext(CategoryContext);

  return (
    <div className={`${custom.sideArea} ${custom.rightmost}`}>
      <div className={custom.sideAreaContent}>
        <Image
          src={demoImg1}
          layout='responsive'
          className={custom.poster}
        />
        <Image
          src={demoImg}
          layout='responsive'
          className={custom.poster}
        />
        <RelatedQuestion />
        {activeCategory && (
          <div className={custom.subcategories}>
            <p>Subcategories of {activeCategory}</p>
            {subcategories[activeCategory].map((subcategory, index) => (
              <div className={custom.subcategory} key={index}>
                <Link href='/'>{subcategory}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideArea;
