import React from "react";
import {SearchOutlined} from "@ant-design/icons";
import InputComponent from "../InputComponent/InputCompnent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
    const 
    {
        size , placeholder , textButton, bordered, 
        backgroundColorInput ='#fff', 
        backgroundColorButton = '#29753d',
        colorButton = '#fff'
    } 
        = props
    return (
        <div style={{display: 'flex'}}>
            <InputComponent
                size={size} 
                placeholder= {placeholder} 
                bordered = {bordered} 
                style = {{backgroundColor: backgroundColorInput}}/>
            <ButtonComponent 
                size={size}  
                styleButton={{background: backgroundColorButton, border: !bordered && 'none'}} 
                icon = {<SearchOutlined color ={colorButton} style = {{ color: '#fff' }} />}
                styleTextButton={{color: colorButton}}
                textButton = {textButton}
             />   
        </div>
    )
}

export default ButtonInputSearch