import arrowIcon from '../../../public/Images/arrowIcon.png'
import Image from 'next/image'
import custom from '../custom.module.css'

function Navbar() {
  return (
    <div>
      <nav className={custom.nav}>
      <Image className={custom.arrowIcon} src = {arrowIcon} alt='arrow' />
     
      <p className={custom.heading}>Live Chat</p>
      </nav>
    </div>
  )
}

export default Navbar
