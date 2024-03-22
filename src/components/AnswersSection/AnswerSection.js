import Image from 'next/image'
import bell from '../../../public/Images/BellBing.png'
import custom from '../custom.module.css'
import UpperArea from '../commonLayouts/UpperArea'
import CommentSectionArea from '@/components/commonLayouts/CommentSectionArea'
import AnswerForm from './AnswerForm'
import banner from '../../../public/Images/Banner.png'
import SimilarQestions from '@/components/commonLayouts/SimilarQuestions'
import Navbar from '../commonLayouts/Navbar'
import SideArea from '../commonLayouts/SideArea'
import Sidebar from '../commonLayouts/Sidebar'
import { CategoryProvider } from '../commonLayouts/CategoryContext'
const AnswerSection = () => {
  return (
    <CategoryProvider>
    <div>
    <Navbar />
    <div className={custom.maincontainer}>
    <div>
    <Sidebar />
    </div>
    <div className={custom.section}>
    <UpperArea/>
      <div className={custom.askquestion}>
        <p>Anil Kumar</p>
        <Image src={bell} alt='bell'
        height={20}
        style={{margin:'1rem', marginRight:'2rem'}}
        />
        </div>
        <div><p className={custom.question}>How many marshmallows does the super-duper marshmallowizer produce per minute?</p>
          <CommentSectionArea /></div>
          
       <div className={custom.text}>
        <p>Asked <b>6</b> years <b>11</b> months ago</p>
        <a href="#">View activity</a>
       </div>
       <div>
       <AnswerForm />
       </div>
       <div> <Image src={banner} alt='banner' 
       layout='responsive' /></div>
      <div>
       <h1 className={custom.queh1}>Similar questions</h1>
       <SimilarQestions />
       <SimilarQestions />
       <SimilarQestions />
       <SimilarQestions /> 

      </div>
       
    </div>
    <div>
    <SideArea />
    </div>
    </div>
     
    </div>
     </CategoryProvider>
  )
}

export default AnswerSection


