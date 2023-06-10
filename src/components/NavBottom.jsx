import React from 'react'
import { Link } from 'react-router-dom'

const NavBottom = ()=>{
  return (
    <>
    <div className="navigation-bottom">
    <div className="navigation-bottom-item">
      <Link to="/">Home</Link>
    </div>
    <div className="navigation-bottom-item">
      <Link to="/upload_dan_play">Upload</Link>
    </div>
  </div>


</>
    )
}

export default NavBottom