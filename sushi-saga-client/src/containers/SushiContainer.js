import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.newSushis.map(newSushi => 
        <Sushi 
        wasSushiEaten={this.wasSushiEaten}
        deleteSushi={props.deleteSushi}
        key={newSushi.id}
        {...newSushi}
        />)
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton addSushis={props.addSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer