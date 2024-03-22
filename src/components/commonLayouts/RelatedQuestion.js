import Link from 'next/link'
import custom from '../custom.module.css'

function RelatedQuestion() {
  return (
    <div className={custom.relatedQuestion}>
        <div className={custom.head}>Related questions</div>
        <div className={custom.questionList}>
            <div><Link href={'/'}>How many marshmallows does the super-duper marshmallowizer produce per minute?</Link></div>
            <div><Link href={'/'}>How many marshmallows does the super-duper marshmallowizer produce per minute?</Link></div>
            <div><Link href={'/'}>How many marshmallows does the super-duper marshmallowizer produce per minute?</Link></div>
            <div><Link href={'/'}>How many marshmallows does the super-duper marshmallowizer produce per minute?</Link></div>
            <div><Link href={'/'}>How many marshmallows does the super-duper marshmallowizer produce per minute?</Link></div>
            <div><Link href={'/'}>How many marshmallows does the super-duper marshmallowizer produce per minute?</Link></div>
            <div><Link href={'/'}>How many marshmallows does the super-duper marshmallowizer produce per minute?</Link></div>
            <div><Link href={'/'}>How many marshmallows does the super-duper marshmallowizer produce per minute?</Link></div>
        </div>
        <div></div>
    </div>
  )
}

export default RelatedQuestion
