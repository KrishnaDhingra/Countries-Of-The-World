import React from 'react'
import { Link } from 'react-router-dom'

export let Card = (props) =>{

    const { image, name, population, region, capital } = props
    return (
        <Link to={{pathname:'details', state:{ image, name, population, region, capital }}}>

            <div className="max-w-md self-stretch transform bg-skin-navbarbg shadow-lg hover:scale-105 rounded pb-1">

                <img className="w-full h-64 rounded-t-md" src={image} alt="" />

                <div className="flex flex-col gap-3 my-6 mb-8 mx-6">

                    <h1 className="text-2xl font-semibold text-skin-base">{name}</h1>

                    <div className="flex gap-1">

                        <span className="text-xl font-semibold 
                        text-skin-base">Population: </span>

                        <span className="text-xl font-normal 
                        text-skin-base">{population}</span>
                    </div>

                    <div className="flex gap-1">

                        <span className="text-xl font-semibold 
                        text-skin-base">Region: </span>

                        <span className="text-xl font-normal 
                        text-skin-base">{region}</span>
                    </div>

                    <div className="flex gap-1">

                        <span className="text-xl font-semibold 
                        text-skin-base">Capital: </span>

                        <span className="text-xl font-normal 
                        text-skin-base">{capital}</span>
                    </div>

                </div>


            </div>
        </Link>
    )
}