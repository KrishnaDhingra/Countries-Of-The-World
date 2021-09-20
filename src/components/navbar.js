import React, { useState } from 'react'
import styled from 'styled-components'

const ThemeButton = styled.div`
    justify-content: ${props => props.direction ? 'flex-start' : 'flex-end'};

`

export let Navbar = () => {

    const [side, setSide] = useState(true)

    return (

        <div className="theme-light py-9 px-20 flex justify-between items-center bg-skin-navbarbg shadow-md">
            <span className="text-2xl tracking-wide font-bold text-skin-base">Where in the world?</span>
            <ThemeButton 
                direction={side} 
                className="rounded-full flex bg-black w-14 h-7 p-1" onClick={() => setSide(!side)}
            >
                <div className="h-5 w-5 rounded-pill bg-white"></div>
            </ThemeButton>
        </div>
    )
}