import React from 'react';
import styled from 'styled-components';
import Image1 from "../../src/assets/clip.jpg";
import Image2 from "../../src/assets/image.jpg";
import Image3 from "../../src/assets/photo.jpg";
import "./Item.css";



const Wrapper = styled.section`
  display: flex;
  justify--content: space-between;
  width: 100%;
`;

const Item = () => {
    return (
        <div className='item_wrapper'>
            <Wrapper>
                <div className='item_box'>
                    <img className='img' src={Image1} alt="" />
                    <h4>Iphone X 256Gb</h4>
                    <strong><p>&#x24; 165</p></strong>
                </div>

                <div className='item_box'>
                    <img className='img' src={Image2} alt="" />
                    <h4>Iphone 8+ 256Gb</h4>
                    <strong><p>&#x24; 120</p></strong>
                </div>

                <div className='item_box'>
                    <img className='img' src={Image3} alt="" />
                    <h4>Iphone XI 500Gb</h4>
                    <strong><p>&#x24; 185</p></strong>
                </div>
            </Wrapper>
        </div>
    )
};

export default Item;