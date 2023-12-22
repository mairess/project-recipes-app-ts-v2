import styled, { keyframes } from 'styled-components';

export const Container = styled.footer`
    width: 22.5rem;
    height: 3.25rem;
    flex-shrink: 0;
    background: #41197F;
    box-shadow: 0px -2px 10px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    position: fixed;
    bottom: 0;
`;

const Dissolve = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const Button = styled.button`
    border: none;
    background: none;

    &:active {
        animation: ${Dissolve} 300ms ease-out;
    }
`;
