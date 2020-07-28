import React from 'react';
import styled from 'styled-components';

const item = styled.div`
${
    (props) => {
        getProps = [];
        Object.entries(props).map((e, i) => {
            if (i < 3) getProps.push(e[0]);
        });
    }}
    display: flex;
    flex-direction: ${() => getProps[0]};
    justify-content: ${() => getProps[1]};
    align-items: ${() => getProps[2]};
    ${() => {
            if (getProps[0] === 'row') {
                return `
    @media all and (max-width: 768px) {
        flex-direction: column;
    }
                `
            }
        }
    }
`;

export default item;