import React from "react";
import Logo from "../../assets/logo.png"
import styled from "styled-components";


const LogoPribadiAku = styled.img`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: start;
    margin: 10px;
`

function index(){
    return(
        <div>
            <LogoPribadiAku src={Logo} alt="" />
        </div>
    )
}

export default index;