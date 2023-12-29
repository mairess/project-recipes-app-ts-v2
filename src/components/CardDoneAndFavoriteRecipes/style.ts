import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    margin-bottom: 4rem;
`;

export const Card = styled.div`
    display: flex;
    width: 19.875rem;
    height: 8.4375rem;
    flex-shrink: 0;
    
    border-radius: 0.3125rem;
    border: 0.518px solid #B1B1B1;
    background: #FFF;
`;

export const CardImage = styled.img`
    width: 10.20913rem;
    height: 8.38rem;
    flex-shrink: 0;
    border-radius: 0.3125rem 0rem 0rem 0.3125rem;
`;

export const Wrapper = styled.div`
    padding: 1rem 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;

    div {
        margin: 0;
        padding: 0;
    }

    h1 {
        margin: 0;
        width: 5.375rem;
        color: #1A1B1C;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    p {
        margin: 0;
        width: 6.375rem;
        color: #797D86;
        text-align: center;
        font-size: 0.5625rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;

        &:first-child {
            color: #797D86;
        }

        &:nth-child(2),
        &:nth-child(3) {
            display: flex;
        }

        &:nth-child(3) {
            color: #1A1B1C;
            font-weight: 400;
        }
    }
`;

export const WrapperTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

const SmartAnimate = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

export const WrapperButtonShare = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    
    button {
        border: none;
        background: none;

        &:active {
        animation: ${SmartAnimate} 300ms ease-out;
    }
    }
`;
