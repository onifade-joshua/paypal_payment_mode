import React from 'react';
import styled from 'styled-components';
import Item from "../components/Item";
import "./Item.css";
import Paypal from "../components/Paypal";
import Data from "../components/Data";

const Wrapper = styled.section`
//   background: #f8fcfd;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
`;

const Payment = () => {
    return (
        <div>
            <Wrapper>
            {Data.map((data) => {
              return  <Item key={Data.id} {...data} />
            })} 
            </Wrapper>
            <div className="pay_box">
                  <Paypal  /> 
            </div>

        </div>
    )
};

export default Payment;