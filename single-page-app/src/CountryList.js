import React, { Component } from 'react'
import CountryDescription from './CountryDescription';

export default class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch(" https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
    }
    render() {
        var { DataisLoaded, items } = this.state;
        return (
            <div className='countryList'>
                <h2>Countries List</h2>

                <ul>
                {items.map(item => (
                    <li><a href="">{item.name.common}</a></li>
                ))}
                </ul>
            </div>
        )
    }
}