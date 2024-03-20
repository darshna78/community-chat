
import UpperArea from '../commonLayouts/UpperArea'
import SimilarQuestions from '../commonLayouts/SimilarQuestions'
import Sidebar from '../commonLayouts/Sidebar'
import SideArea from '../commonLayouts/SideArea'

import custom from '../custom.module.css'
import Navbar from '../commonLayouts/Navbar'
function QuestionPage() {
  return (
    <div>
    <Navbar />
    <div className={custom.maincontainer  }>
     <div>
    <Sidebar />
    </div>
    <div>
      <UpperArea />
      <SimilarQuestions/>
      <SimilarQuestions/>
      <SimilarQuestions/>
      <SimilarQuestions/>
      <SimilarQuestions/>
      <SimilarQuestions/>
    </div>
    <div>
    <SideArea  />
    </div>
    </div>
   
    </div>
  )
}

export default QuestionPage
