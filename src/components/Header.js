import React from "react"
import styled from "styled-components"
import logo from "../images/travelafrique_logo.svg"

const HeaderDiv = styled.div`
    padding:20px 100px 0 100px;
    height:100px;
    border-bottom:1px solid #f0f0f0;
    width:100%;
`

const Header = () => {
    return(
        <HeaderDiv>
            <img src={logo} alt="travel afrique logo" />
        </HeaderDiv>
    )
}


export default Header;