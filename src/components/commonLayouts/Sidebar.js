'use client'
import { useState } from 'react';
import custom from '../custom.module.css'
import Image from 'next/image';
import menuIcon from '../../../public/Images/menuIcon.svg'

const Sidebar = () => {
 const [show,setShow] = useState(false)
  function showSidebar() {
    setShow(!show);
  }

    return (
      <div>
         <button onClick={showSidebar} className={custom.toggleButton}><Image width={30} height={30} src={menuIcon}/>
      </button>
     
      <div style={{ display: show ? 'block' : '' }}  className={custom.sidebar}>
      
        <div className={custom.sidebarContent}>
       
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
    
          </ul>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
    
          </ul>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
    
          </ul>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
    
          </ul>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
    
          </ul>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
    
          </ul>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
     
          </ul>
         
        </div>
      </div>
      </div>
    );
  };
  
  export default Sidebar;
