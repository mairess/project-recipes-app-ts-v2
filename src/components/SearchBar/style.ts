import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    width: 21.125rem;
    height: 6.75rem;
    flex-shrink: 0;

    background-color: #41197F;
    border-radius: 1.25rem;
`;

export const SearchInput = styled.input`
    width: 21.125rem;
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    border: 1px solid #B1B1B1;
    background: #FFF;

    color: #797D86;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 0 1rem;
`;

export const WrapperRadios = styled.div`
    display: flex;
    gap: 1rem;
    color: #FFF;
    font-size: 0.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1rem;

    input {
        accent-color: #FCC436;
        margin: 0 0.3rem;
        vertical-align: middle;
    }
`;
