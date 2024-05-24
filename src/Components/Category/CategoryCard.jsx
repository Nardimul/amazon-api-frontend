import React from 'react'
import classes from './category.module.css'
import {Link} from "react-router-dom";

//yemetmetawa data--props--destructuring
function CategoryCard({data}) {
  return (
    <div className={classes.category}>
      {/* Pass dynamic routing by to */}
      <Link to={`/category/${data.name}`}>
        {/* {data.url ? data.url : ''} */}
        {/* set when a valid URL is available in data.url */}
        {/* style={{ pointerEvents: 'none' }} 
        */}

        <span>
            <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt=""/>
        <p>shop now</p>
      </Link>
    </div>
  )
}

export default CategoryCard
