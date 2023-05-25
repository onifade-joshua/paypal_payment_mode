import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import "./Item.css";




const Wrapper = styled.section`
  display: flex;
  justify--content: space-between;
  width: 100%;
`;

const Item = ({ id, imageUrl, productName, price }) => {
    return (
        <Wrapper>
            <div className='item_wrapper'>

                <div id={id} className='item_box'>
                    <img className='img' src={imageUrl} alt="" />
                    <h4>{productName}</h4>
                    <strong><p>{price}</p></strong>
                </div>

            </div>
        </Wrapper>
    )
};

export default Item;



Item.propTypes = {
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};