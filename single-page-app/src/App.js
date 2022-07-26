import React, { Component } from 'react'
import CountryDescription from './CountryDescription';
import CountryDetails from './CountryDetails';
import CountryList from './CountryList'

class App extends Component {
  render() {
    return (
        <div className="country">
        <div className='country__container'>
            <CountryList />
            <CountryDescription />
            <CountryDetails />
        </div>
        </div>
    )
  }
}

export default App;