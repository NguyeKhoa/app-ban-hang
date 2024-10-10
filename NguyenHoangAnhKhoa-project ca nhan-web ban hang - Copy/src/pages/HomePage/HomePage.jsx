import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperStyleProduct } from "./style";
import SlideComponent from "../../components/SlideComponent/SlideComponent";
import slider1 from "../../asset/img/slider1.png";
import slider2 from "../../asset/img/slider2.png";
import slider3 from "../../asset/img/slider3.jpg"

const HomePage = () => {
    const arr = ['TV', 'Tu lanh', 'Laptop']
    return (
        <div style={{padding: '0 120px'}}>
            <WrapperStyleProduct>
            {arr.map((item) => {
            return (
                <TypeProduct name={item} key={item} />
            )
            })}
            </WrapperStyleProduct>
            <SlideComponent arrImage = {[slider1, slider2, slider3]} /> 
        </div>
    )
}

export default HomePage