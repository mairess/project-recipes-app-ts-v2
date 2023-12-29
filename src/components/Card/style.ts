import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-shrink: 0;
    gap: 0.8rem;
    margin-top: 0.3125rem;
    margin-bottom: 4rem;

    a {
        text-decoration: none;
    }
`;

export const RecipeName = styled.h1`
    color: #1A1B1C;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 8.92519rem;
`;

export const Wrapper = styled.div`
    width: 10.20025rem;
    height: 10.38238rem;
    flex-shrink: 0;

    border-radius: 0.3125rem;
    border: 0.518px solid #B1B1B1;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Image = styled.img`
    width: 10.20913rem;
    height: 8.42838rem;
    flex-shrink: 0;
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
`;
