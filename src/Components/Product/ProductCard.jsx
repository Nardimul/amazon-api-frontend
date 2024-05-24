import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './product.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider'
import {Type} from '../../Utility/action.type'

function ProductCard({product, flex, renderdesc,  renderAdd}) {
  const {image, title, id, rating, price, description} = product;
  // console.log(product)
// Avail data Context(--from DataProvider--Index.js) by using useContext we can pass data context to use context so that state& dispach endikenes...use custom Hook
const [state, dispatch]=useContext(DataContext)  

// console.log(state)
const addToCart = ()=>{
dispatch({
  // Type Checks the condition from reducer.js and decide the action or action type to be added
  type: Type.ADD_TO_BASKET, 
  item: {
    image, title, id, rating, price, description
  }
})  
}

 
  return (
    <div className={`${classes.card__container} ${flex?classes.product__flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderdesc && <div style={{maxWidth: "750px"}}>{description}</div>}
        <div className={classes.rating}>
            {/* rating */}
            <Rating value={rating?.rate} precision ={0.1} />
            {/* count */}
            <small>
              {rating?.count}
            </small>
        </div>
        <div>
            {/* price */}
            <CurrencyFormat amount={price}/>
        </div>
        {
          renderAdd && <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
        }
        
      </div>
    </div>
  )
}

export default ProductCard
