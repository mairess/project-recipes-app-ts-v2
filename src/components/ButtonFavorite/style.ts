import styled, { keyframes } from 'styled-components';

const SmartAnimate = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

export const Button = styled.div`
    display: flex;
    gap: 0.5rem;

    button {
        border: none;
        background: none;

        &:active {
        animation: ${SmartAnimate} 300ms ease-out;
    }
    }
`;
