import React from 'react';
import styled from 'styled-components';
import Item from "../components/Item";
import "./Item.css";
import Paypal from "../components/Paypal";

const Wrapper = styled.section`
//   background: #f8fcfd;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Payment = () => {
    return (
        <div>
            <Wrapper>
                <Item />
            </Wrapper>
            <div className="pay_box">
                <Paypal />
            </div>

        </div>
    )
};

export default Payment;