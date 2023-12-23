import styled from 'styled-components';
import circleIcon from '../../images/circle.svg';

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 10.11588rem;
    gap: 3rem;
`;

export const TopHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); 
    padding: 0 0.7rem;
`;

export const BottomHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RecipeTitle = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.13125rem;
    text-transform: uppercase;
    margin: 0;
    filter: drop-shadow(0px 0px 2.915px rgba(0, 0, 0, 1));

`;

export const WrapperIcon = styled.div`
    background-image: url(${circleIcon});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    filter: drop-shadow(0px 0px 2.915px rgba(0, 0, 0, 1));
`;

export const WrapperTag = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    p {
        color: #FCC436;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 0;
        filter: drop-shadow(0px 0px 2.915px rgba(0, 0, 0, 1));
    }
`;

export const FavAndShare = styled.div`
    display: flex;
    gap: 0.5rem;
    filter: drop-shadow(0px 0px 2.915px rgba(0, 0, 0, 1));
`;
