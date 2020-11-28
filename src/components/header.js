import React from 'react'
import { css } from 'styled-components';
import Navigation from './Navigation';

const Header = ({ left, right }) => {

    if(left === undefined) left = 'white';

    return (
        <header
            css={css`
                background-color: transparent;
                padding:2rem;
                width:100%;
                position:absolute; 
                top:0;
                left:0;
                z-index:10000;
            `}
        >
            <div 
                css={css`
                    max-width:1200px;
                    margin:0 auto;

                    @media(min-width: 768px){
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                    }
                `}
            >
                <img
                    css={css`
                        height:5rem;
                    `}
                    alt='Gatsby logo svg'
                src='https://decodenatura.com/static/fa38ab30a9b8abb4a1ff8c0b7fb86cef/Gatsby_Logo.png'/>

                <Navigation right={right}/>
            </div>
        </header>
    )
}

export default Header
