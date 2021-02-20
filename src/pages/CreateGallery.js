import React from 'react'
import Header from '../components/Header'
import styled from "styled-components"
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import {images} from "../components/Data"

const Container = styled.div`
    padding:20px 100px 0 100px;
    height:100px;
    border-bottom:1px solid #f0f0f0;
    width:100%;
`

function CreateGallery() {
    return (
        <div>
            <Header />
            <Container>
                <Lightbox images={images}  allowZoom="false" allowRotate="fasle"/>
            </Container>
        </div>
    )
}

export default CreateGallery
