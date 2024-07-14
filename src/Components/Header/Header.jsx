import React, { useContext } from 'react'
import classes from './header.module.css'
import {Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { DataContext, DataProvider } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';
function Header() {
    const [{user, basket}, dispatch]=useContext(DataContext)
    // console.log(basket.length);
    // To balance lower amount with amount on cart
    const totalItem = basket?.reduce((amount, item)=>{
        return item.amount + amount
    }, 0)


  return (
    <>
    <section className={classes.fixed}>
        <div className={classes.header__container}>
         {/* Logo sectoon*/}
            <div className={classes.logo__container}>
                <Link to="/">
                    <img src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' alt='amazon log'/>
                </Link>
                 {/* Delivery */}
                <div className={classes.delivery}>
                    <span>
                        <SlLocationPin />
                    </span>
                    <div>
                        <p>Delivered to </p>
                        <span>Ethiopia</span>
                    </div>
                </div>
            </div>
        {/* Search */}
        <div className={classes.search}>
            <select name="" id="" >
                <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={38}/>
         </div>
        {/* other section */}
            <div className={classes.order__container}>
                <Link to="" className={classes.language}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041" 
                alt="" />
                <select name="" id="">
                    <option value="">EN</option>
                </select>
                </Link>
            {/* three components */}
            <Link to={!user && "/auth"}>
                {/* Display user if s/he has an account */}
                <div>
                    {
                        user?(
                            <>
                              <p>Hello {user?.email?.split("@")[0]}
                              </p>
                              {/* Call sign out method from firebase ...to update the state go to app js.and implement*/}
                              <span onClick={()=>auth.signOut()}>Sign Out</span>
                            </>
                      
                    ):(
                        <>
                        <p>Hello, Sign In</p>
                        <span>Account & Lists</span>
                        </>
                    )
                    }
    
                </div>
            </Link>
            {/* Orders */}
            <Link to="/orders">
                    <p>returns</p>
                    <span>& Orders</span>
            </Link>
            {/* Cart */}
            <Link to ="/cart" className={classes.cart}>
                <BiCart size={35}/>
                {/* <span>{basket.length}</span> */}
                <span>{totalItem}</span>
            </Link>
        </div>
        </div>
    </section>
    <LowerHeader />
    </>
  );
};

export default Header
