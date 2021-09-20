import React from 'react'

export let Card = (props) =>{
    return (
        <div className="max-w-md self-stretch transform bg-skin-navbarbg shadow-lg hover:scale-105 rounded">

            <img className="w-full h-64 rounded-t-md" src={props.image} alt="" />

            <div className="flex flex-col gap-3 my-6 mb-8 mx-6">

                <h1 className="text-2xl font-semibold text-skin-base">{props.name}</h1>

                <div className="flex gap-1">

                    <span className="text-xl font-semibold 
                    text-skin-base">Population: </span>

                    <span className="text-xl font-normal 
                    text-skin-base">{props.population}</span>
                </div>

                <div className="flex gap-1">

                    <span className="text-xl font-semibold 
                    text-skin-base">Region: </span>

                    <span className="text-xl font-normal 
                    text-skin-base">{props.region}</span>
                </div>

                <div className="flex gap-1">

                    <span className="text-xl font-semibold 
                    text-skin-base">Capital: </span>

                    <span className="text-xl font-normal 
                    text-skin-base">{props.capital}</span>
                </div>

            </div>


        </div>
    )
}