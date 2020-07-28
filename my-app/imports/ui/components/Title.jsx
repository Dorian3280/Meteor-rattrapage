import React from 'react';
import styled from 'styled-components';

let customTitle = (props) => {
    if (props.type === '1') {
        return <h1 {...props}>{props.children}</h1>;
    } else if (props.type === '2') {
        return <h2 {...props}>{props.children}</h2>;
    }
}

const item = styled(customTitle)`
    font-size: 2rem;
    text-align: center;
    color: palevioletred;
`;

export default item;