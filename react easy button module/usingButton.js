import React from 'react'
import styled from 'styled-components';
import Button from './button.js';
const HStyle = styled.div`


    `;


export default function funcName() {
    return (
        <HStyle>
            <div className=" ">
             <h1 className=" ">
                <span id="myname">Hello,this is Sapnadip Baidya the creator</span>
                
           
     
                <Button  BtnLink="/projects" BtnText="this is a button" outlineColor={'rgba(173, 137, 36, 0.747)'} outline={true} bgcolor={'rgba(173, 137, 36, 0.747)'} outlineThick={'9px'}/>
            </div>
        </HStyle>
    )
}
