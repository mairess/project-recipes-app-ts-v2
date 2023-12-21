import React, { createContext, useState } from 'react';

type ContextType = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleSearchTerm: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchTermContext = createContext({} as ContextType);

function SearchTermProvider({ children }: React.PropsWithChildren) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTerm = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = target.value;
    setSearchTerm(newTerm);
  };

  return (
    <SearchTermContext.Provider value={ { searchTerm, handleSearchTerm, setSearchTerm } }>
      {children}
    </SearchTermContext.Provider>
  );
}

export default SearchTermProvider;
