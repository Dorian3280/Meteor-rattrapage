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
    max-width: 100%;
    padding: 20px 40px;
    background: #1DD3B0;
    border-radius: 40px;
    border: none;
`;

export default item;