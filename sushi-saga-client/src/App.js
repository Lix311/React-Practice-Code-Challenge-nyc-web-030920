import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis:[],
    newSushis:[],
  
  }
  
  // componentDidMount(){
  //   fetch("http://localhost:3000/sushis/?_limit=4")
  //   .then(res => res.json())
  //   .then(data => this.setState({sushis: data}))
  // }

  addSushis = () => {
    
    this.setState({newSushis: []}) 
    
    fetch(`http://localhost:3000/sushis/?_limit=4}`)
    .then(res => res.json())
    .then(data => this.setState({newSushis: data}))
    this.setState({sushis: [...this.state.sushis, this.state.newSushis]})



    console.log(this.state.newSushis)
    console.log(this.state.sushis)
  }

  deleteSushi = (id) => {
    console.log(id)
    let filteredSushi = this.state.newSushis.filter(sushi => sushi.id !== id)
    this.setState({newSushis: filteredSushi})
}

wasSushiEaten = (id) => {
  let deletedSushi = this.state.newSushis.filter(sushi => sushi.id === id)
  if (this.state.newSushis.includes(deletedSushi)){
    return true 
  } else {
    return false 
  }
}


  render() {
    return (
      <div className="app">
        <SushiContainer 
        newSushis={this.state.newSushis} 
        deleteSushi={this.deleteSushi} 
        addSushis={this.addSushis}
        wasSushiEaten={this.wasSushiEaten}
        />
        <Table />
      </div>
    );
  }
}

export default App;