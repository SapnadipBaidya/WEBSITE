import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const BtnStyles = styled.div`
background-color:${(props)=>props.outline?'tansparent': props.bgcolor};
position:absolute;
top:;
max-height:;
height:;
max-width:;
width:;
left:;
border:${(props)=>props.outlineThick} solid ${(props)=>props.outlineColor};
`;


export default function Button({BtnLink,BtnText,outline,bgcolor,outlineColor,outlineThick}) { /*outline={false or true}*/
    return (
        <BtnStyles outline={outline} bgcolor={bgcolor} outlineColor={outlineColor} outlineThick={outlineThick}>
            <Link className="button" to = {BtnLink}>{BtnText}</Link>
       </BtnStyles>
    )
}
