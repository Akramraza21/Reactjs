import React, {useState,useEffect} from 'react'
import classes from './navbar.module.css'

function Navbar() {
    const [show,handleShow] = useState(false);
    useEffect(() => {
            window.addEventListener("scroll",()=>{
            if( window.scrollY>100)
            {handleShow(true);}
            else handleShow(false);
        });
            return ()=>window.removeEventListener("scroll")
        
    }, [])
    return (
        <div className={show?classes.nav__black:classes.nav}>
        <img
        className={classes.nav__logo}
        src="https://lh3.googleusercontent.com/proxy/fBS25kFDdMHypW0SyNp1n3MD3gFULXeMlfnyJ35Ic7u_NJ2YuR__DHKzDmBYHR152kt-TTVOnnmrSyiKgRsSMukjnyb42Lrs1rG6nsTGlxkhcLTgMbo"
        alt="Netflix Logo"
            />
        </div>
    )
}

export default Navbar;
