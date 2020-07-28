import React from 'react';
import styled from 'styled-components';

const customTitle = (props) => { 
    return (() => {switch (props.type) {
        case '1':
            return <h1>{props.children}</h1>;
            break;
        case '2':
            return <h2>{props.children}</h2>;
            break;
        default:
            return <p>{props.children}</p>
    }})();
}

const item = styled(customTitle)`
    font-size: 2em;
    text-align: center;
    color: palevioletred;
`;

export default item;