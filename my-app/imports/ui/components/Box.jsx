import React from 'react';
import styled from 'styled-components';

const customItem = (props) => {
    if (props.text) {
        return <textarea {...props}></textarea>;
    }
    return <div {...props}>{props.children}</div>
}

const item = styled(customItem)`
    width: 500px;
    min-height: 100px;
    padding: 10px 40px;
    background: #1DD3B0;
    border-radius: 40px;
    border: none;
`;

export default item;