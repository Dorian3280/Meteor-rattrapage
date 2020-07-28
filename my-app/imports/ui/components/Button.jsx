import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const customButton = (props) => {
    if (props.to) {
        return <Link {...props}></Link>;
    }
    return <button {...props}>{props.children}</button>
}

const item = styled(customButton)`
    border: none;
    min-width: 200px;
    line-height: 50px;
    background: #F05D5E;
    margin: 10px;
    padding: 5px 20px;
    border-radius: 32px;
    text-align: center;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    font-family: "Montserrat", sans-serif;
    font-size: 1.3rem;
    box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
    :hover {
        opacity: 0.8;
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
    }
    ${({ primacy }) => {
        return primacy ? `:active {
            opacity: 1;
            box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
        }` : ''
    }}}
`;

export default item;