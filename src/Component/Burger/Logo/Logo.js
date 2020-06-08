import React from 'react'
import burgerlogo from '../../../assets/images/original.png'
import style from './Logo.css'

const burgerLogo = props => (
    <div className={"Logo"}><img src={burgerlogo}  alt="YourBurger"/></div>
)
export default burgerLogo;