import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SmartAnimate = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

export const WrapperTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 22.5rem;
    height: 3.25rem;
    flex-shrink: 0;
    background: #FCDC36;
    padding: 0 1rem;

    div {
        display: flex;
        gap: 1rem;
    }

    button {
        background: none;
        border: none;
        
        &:active {
        animation: ${SmartAnimate} 300ms ease-out;
    }
    }
`;

export const WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`;

export const Title = styled.h1`
    color: #41197F;
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.13125rem;
    text-transform: uppercase;
`;
