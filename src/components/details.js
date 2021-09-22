import React from 'react'
import { Navbar } from './navbar.js'
import { Link } from 'react-router-dom'

export const Details = (props) => {

    let borders = ['Iran (Islamic Republic of)', 'Pakistan', 'Turkmenistan', 'Uzbekistan', 'Tajikistan', 'China']

    let { image, name, population, region, capital } = props.location.state
    
    let heading1 = [
        {
            heading: 'Native name',
            value: {name}
        },
        {
            heading: 'Population',
            value: {population}
        },
        {
            heading: 'Region',
            value: {region}
        },
        {
            heading: 'Subregion',
            value: ''
        },
        {
            heading: 'Capital',
            value: {capital}
        }

    ]

    let heading2 = [
        {
            heading: 'Top Level Domain',
            value: {name}
        },
        {
            heading: 'Currencies',
            value: {name}
        },
        {
            heading: 'Languages',
            value: {name}
        }
    ]

    return (
        <div className="theme-light w-screen min-h-screen h-auto bg-skin-bodybg">
            <Navbar/>

            <div className="flex pt-24 place-items-start px-36 flex-col gap-18 w-full gap-12 min-h-auto">
                
                <Link to='/'><button className="outline-none bg-skin-navbarbg text-skin-base rounded px-6 py-3 shadow-md">Back</button></Link>
                <div className="flex gap-12">
                    <img className="" src={image} alt="" />

                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-4xl">Afghanistan</h1>

                        <div className="flex gap-48">

                            <div className="flex flex-col gap-1">

                                {heading1.map(element => {
                                    return (
                                        <div className="flex gap-1">
                                            <span className="font-semibold text-base">{element.heading}:</span>
                                            <span className="font-normal text-base">{element.value}</span>
                                        </div>
                                    )
                                })}
                            </div>


                            <div className="flex flex-col gap-1">

                                {heading2.map(element => {
                                    return (
                                        <div className="flex gap-1">
                                            <span className="font-semibold text-base">{element.heading}:</span>
                                            <span className="font-normal text-base">{element.value}</span>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                        <div className="flex flex-col gap-2 mt-12">
                            <h1 className="text-2xl font-semibold">Border Countries</h1>

                            <div className="flex flex-wrap gap-1.5">

                                {borders.map(element => {
                                    return (
                                        <div className="bg-skin-navbarbg px-4 py-2">{element}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}