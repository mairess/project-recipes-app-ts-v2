import styled, { keyframes } from 'styled-components';

const animateButton = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

export const StyledButton = styled.button`
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
