import React from 'react'
import '../../css/footer.css'
import { Link } from 'react-router'

const Footer = () => {
  return (
   <div className='ftrDiv'>
      <div className="ttl">
        <h1>Quotify</h1>
      </div>
      <div className="sclHndl">
        <Link className='inst'>instagram</Link>
      </div>
   </div>
  )
}

export default Footer
