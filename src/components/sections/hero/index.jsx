import React from "react";
import styled from "styled-components";
import ImageHero from "../../../assets/komputer-image.jpg";
import './hero.css'

const TitleHero = styled.h1`
    width: 300px
`;

function index (){
    return(
        <>
            <div className="heroContainer">
                <TitleHero>Bootcamp Coding Javascript</TitleHero>
                <h3
                style={{
                    fontWeight: "400",
                    color: "gray",
                    margin : "15px 0",
                    width : "500px",

                }}
                >
                    jadi Full stack Developer dalam 16 minggu tanpa background it dibantu dapat kerja setelah lulus
                </h3>
                <img className="gambar" src={ImageHero} alt=""/>
            </div>
        </>
    )
}

export default index;