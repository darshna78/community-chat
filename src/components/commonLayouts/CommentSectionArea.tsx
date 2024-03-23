
import upArrow from '../../../public/Images/ArrowUp.png'
import downArrow from '../../../public/Images/arrowdown.png'
import heart from '../../../public/Images/Heart.png'
import Comment  from '../../../public/Images/ChatRound.png'
import share from '../../../public/Images/Share.png'
import Image from 'next/image'
import custom from '@/components/custom.module.css'

function CommentSectionArea() {
  return (
    <div>
          <div className={custom.views}>
            <p><b>0</b> Answers &nbsp; <b>2</b> views</p>
            <p>Updated <b>2sec </b> ago</p>
          </div>
          <div className={custom.commentsArea}>
          <div className={custom.comments}>
         <Image src = {upArrow} alt ='upArrow'className={custom.icons}  />
         <p>5</p>
          </div>
          <div className={custom. comments}>
         <Image src = {downArrow} alt ='downArrow'className={custom.icons}  />
         <p>0</p>
          </div>
          <div className={custom.comments}>
         <Image src = {heart} alt ='heart'className={custom.icons}   />
         <p>5</p>
          </div>
          <div className={custom.comments}>
         <Image src = {Comment} alt ='Comment'className={custom.icons}  />
         <p>10</p>
          </div>
          <div className={custom.comments}>
         <Image src = {share} alt ='share'className={custom.icons}  />
         <p>10</p>
          </div>
          </div>
          </div>
  )
}

export default CommentSectionArea
