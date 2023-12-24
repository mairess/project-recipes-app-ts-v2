import styled from 'styled-components';
import circleIcon from '../../images/circle.svg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .6rem;
    margin-top: 0.35rem;

    p {
        color: #797D86;
        text-align: center;
        font-size: 0.7rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin: 0rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 2rem;
        max-width: 3.3rem;
    }
`;

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const WrapperButton = styled.div`
    background-image: url(${circleIcon});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
`;

export const Button = styled.button`
    background: none;
    border: none;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
