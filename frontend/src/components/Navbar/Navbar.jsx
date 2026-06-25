import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import logo from '../../assets/logo.png'
import headerImg from './assets/header-img.png'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin, search, setSearch}) => {
    const [menu,setMenu] = useState("menu");

    const {getTotalCartAmount} =useContext(StoreContext);
  return (
    <div className='navbar'>
        <Link to='/'><img src={logo} alt="logo" width="150" height="150" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <div className="search-box">
              <img src={assets.search_icon} alt="" />
              <input
                type="text"
                placeholder="Search food..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
            </div>
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar
