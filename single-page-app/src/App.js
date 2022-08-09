import React, { Component} from 'react'
import CountryDescription from './components/CountryDescription';
import CountryDetails from './components/CountryDetails';
import CountryList from './components/CountryList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <div className="country">
          <div className='country__container'>
              <CountryList />
              <CountryDescription />
              <CountryDetails />
            <Routes>
              <Route path="/" exact element={<CountryList />} />
              <Route path="/country/:cntry" exact element={<CountryDescription />} />
            </Routes>
          </div>
        </div>
      </Router>
      </>
    )
  }
}

export default App;