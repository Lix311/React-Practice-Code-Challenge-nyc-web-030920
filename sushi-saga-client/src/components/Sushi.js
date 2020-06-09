import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={/* Give me a callback! */() => props.deleteSushi(props.id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={/* Give me an image source! */props.img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */props.name} - ${/* Give me a price! */props.price}
      </h4>
    </div>
  )
}

export default Sushi