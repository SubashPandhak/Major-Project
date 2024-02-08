import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import {Link} from "react-router-dom"

const NavBar = () => { 
  
  const loc = useLocation();
  const [page, setPage] = useState("")
  useEffect(() => {
    setPage(loc.pathname)
  },[loc])

  return(
  <div className='absolute top-0 z-[5] text-white w-full px-[50px] py-[20px]'>
    <div className='flex justify-between w-full'>
      <div className='text-4xl'><Link to={"/"} >CropAI</Link></div>
      <div>
        <ul className='flex gap-[30px] text-xl '>
          <Link to="/about" >
            <li className={`${page === "/about" ? "nav-pag-active" : ""}`} >About</li>
          </Link>
          <Link to="/recommendation" >
            <li className={`${page === "/recommendation" ? "nav-pag-active" : ""}`} >Recommendation</li>
          </Link>
          <Link to="/result" >
            <li className={`${page === "/result" ? "nav-pag-active" : ""}`} >Result</li>
          </Link>
        </ul>
      </div>
    </div>
  </div>
)}

export default NavBar