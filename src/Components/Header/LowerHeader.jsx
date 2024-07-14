import React from 'react'
import classes from './header.module.css'
import { FiMenu } from "react-icons/fi";

function LowerHeader() {
  return ( 
    <div className={classes.lower__container}>
      <ul>
        <li>
            <FiMenu />
            <p>All</p>
        </li>
        <li>Today's deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  )
}

export default LowerHeader
