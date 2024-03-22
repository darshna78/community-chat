
'use client'
import custom from '@/components/custom.module.css'
import CommentSectionArea from './CommentSectionArea'
import { useRouter } from 'next/navigation'
function SimilarQuestions() {
    const router = useRouter();
  return (
    <div className={custom.similarQuestion} onClick={()=>router.push('/question')}>
      
      <div className={custom.askquestion}>
        <p>Anil Kumar</p>
        
        </div>
          <p className={custom.question}>How many marshmallows does the super-duper marshmallowizer produce per minute?</p>
          <CommentSectionArea />
    </div>
  )
}

export default SimilarQuestions
