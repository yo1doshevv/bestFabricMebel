import React from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar_wrapper">
        <div className="navbar_logo">
         <h1> <NavLink className={"navbar_logo"} to={"/"}><img src="https://cute-sprinkles-79cc35.netlify.app/assets/logo-DDXHFmis.png" alt="" /></NavLink></h1>
        </div>
        <div className="navbar_nav">
          <ul>
            <li>
              <NavLink className={"link"} to={"/"}>Bosh Sahifa</NavLink>
            </li>

            <li>
              <NavLink className={"link"} to={"/toplam"}>Toplam</NavLink>
            </li>

            <li>
              <NavLink className={"link"} to={"/about"}>Biz Haqimizda</NavLink>
            </li>

            <li>
              <NavLink className={"link"} to={"/contact"}>Aloqa</NavLink>
            </li>

          </ul>
        </div>

        <select className='navbar_languages' name="" id="">
          <option className='navbar_lang' value="Uzbek">Uz</option>
          <option className='navbar_lang' value="English">En</option>
          <option className='navbar_lang' value="Russian">Ru</option>
        </select>
      </div>
    </div>
  )
}

export default Navbar