import styled, { keyframes } from 'styled-components';
import tomato from '../../images/tomate.png';

export const Container = styled.div`
    background-image: url(${tomato});
    background-position: 50%;
    background-repeat: no-repeat;
    height: 100vh;

    input {
        width: 17.25rem;
        height: 2.5rem;
        flex-shrink: 0;
        padding: 0 1rem;
        border-radius: 0.3125rem;
        border: 0.5px solid #41197F;
        color: #41197F;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    ::placeholder {
        color: #41197F;
    }
`;

export const LogoRecipes = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    background: #41197F;

    height: 22.2rem;
    flex-shrink: 0;
    z-index: -1;

    img {
        width: 12.375rem;
        height: 9.82813rem;
        flex-shrink: 0;
        margin-top: 1.25rem;
    }
`;

export const Img = styled.img`
    filter: drop-shadow(0.786px 13.357px 10.214px rgba(33, 18, 55, 0.20));
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1px;
    gap: 0.5rem;
    margin-top: 80px;

    h1 {
        color: #41197F;
        text-align: center;
        font-size: 1.25rem;
        font-style: italic;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.20625rem;
        text-transform: uppercase;
    }
`;

const animateButton = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

export const Button = styled.button`
    width: 17.25rem;
    height: 2.5rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.3125rem;
    background: #FCC436;
    border: none;

    color: #FFF;
    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.02625rem;
    text-transform: uppercase;

    &:disabled {
        background-color: grey;
    }

    &:active {
        animation: ${animateButton} 300ms ease-out;
    }
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-top: 4px solid #41197F;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      animation: ${spin} .5s linear infinite;
`;
