import styled from 'styled-components';

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
    min-width: 6rem;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    align-items: start;
`;

export const Name = styled.h1`
    margin: 0.5rem 0 0.25rem;
    color: #1A1B1C;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const sharedStyle = styled.p`
    display: flex;
    color: #797D86;
    text-align: center;
    font-size: 0.5625rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const CategoryNationality = styled(sharedStyle)``;

export const AlcoholicOrNot = styled(sharedStyle)``;

export const DoneDate = styled.p`
    color: #1A1B1C;
    text-align: center;
    font-size: 0.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const WrapperTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

export const WrapperButtonShare = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    position: relative;
`;

export const LinkCopied = styled.div`
    display: flex;
    margin-top: 0.5rem;
    align-items: center;
    justify-self: center;
    position: absolute;
    filter: drop-shadow(0px 0px 2.915px rgba(0, 0, 0, 1));
`;
