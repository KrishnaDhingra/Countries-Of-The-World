import React, { useState } from 'react'
import { Navbar } from './navbar.js'
import { Details } from './details.js'
import { Card } from './card.js'
import  { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import '../index.css'

export let Fetcher = () => {
    return fetch('https://restcountries.eu/rest/v2/all').then(res => res.json())
}

export let Home = () => {
    const options = [
        {
          label: "Filter By Region",
          value: "filter by region",
        },
        {
          label: "Africa",
          value: "africa",
        },
        {
          label: "America",
          value: "america",
        },
        {
          label: "Asia",
          value: "asia",
        },
        {
          label: "Europe",
          value: "europe",
        },
        {
          label: "Oceania",
          value: "oceania",
        }
      ];

    const { data, isLoading } = useQuery('hello', Fetcher)
    const [ value, setValue ] = useState('')
    const [ region, setRegion ] = useState('')
    console.log(region)

    let filteredCountries = ''

    if(region === '' || region === 'filter by region'){
        filteredCountries = filteredCountries
    }else{
        filteredCountries = filteredCountries.filter(country => country.region.toLowerCase().includes(region.toLowerCase()))
    }
    
    if(isLoading){
        return <h1>isLoading...</h1>
    }else{
        filteredCountries = data.filter(country => country.name.toLowerCase().includes(value.toLowerCase()))

    }
    
    return(
            <div className="theme-light bg-skin-bodybg w-screen min-h-screen h-auto">

                <Navbar/>

                <div className="max-w-screen-xl flex w-full px-4 sm:px-10 xl:px-0 xl:w-4/5 justify-center gap-8 sm:gap-0 sm:justify-between h-10 sm:items-center mx-auto pt-24 border-box flex-col sm:flex-row">

                    <input placeholder="Name a Country" type="text" className="h-10 outline-none rounded p-2 px-4" onChange={(e) => setValue(e.target.value)} value={value}/>

                    <select className="outline-none p-2 px-4 rounded w-48" selected='filter by region' id="region" onChange={(e) => setRegion(e.target.value)}>
                        {options.map(element =>{
                            return (
                                <option value={element.value}>{element.label}</option>
                            )
                        })}
                    </select>

                </div>

                <div className="max-w-screen-xl mt-32 mb-32 grid px-10 xl:px-0 md:grid-cols-2 lg:grid-cols-3 w-full xl:w-4/5 mx-auto gap-12 md:gap-8 xl:gap-12 place-content-center md:place-items-stretch">

                    {filteredCountries.map(element => {
                        return(
                            <Card image={element.flag} name={element.name} population={element.population} region={element.region} capital={element.capital}/>
                        )
                        
                    })}
                </div>
            </div>
    )
}