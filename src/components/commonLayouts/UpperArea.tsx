import Image from "next/image"

import vector from '../../../public/Images/vector.png'
import frame from '../../../public/Images/frame.png'
import custom from '../custom.module.css'
import Navbar from './Navbar'

function UpperArea() {
  return (
    <div >
       
     
      <div className={custom.names}>
        <span>Delhi University </span>
            <Image src={vector}  alt="vector"
            style={{ marginTop: '4px' }}  />
            <span>Physics Hons.</span>
        
      </div>
      <div className={custom.addQuestion}>
        <div>Top Questions</div>
         <button className={custom.button}>Add question</button> 
      </div>
      <div>
        <Image src = {frame}
            
            layout="responsive"
           alt="frame"
        />
      </div>
    </div>
  )
}

export default UpperArea
