import { SearchWrapper, StyledSearchBar, SearchResults } from './SearchBar.styles';
import React, { useCallback, useState } from 'react';
import { useToDoLists } from '../../../providers/ToDosListsProvider';

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>('');

  const { filteredList, setToDosLists, toDosLists } = useToDoLists();

  const handleSearchBarChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchPhrase(e.target.value),
    [searchPhrase]
  );

  const handleSearch = useCallback(
    (phrase: string) => {
      return filteredList.filter((element) => {
        if (phrase.length === 0) {
          return element;
        } else if (element.name.toLowerCase().includes(phrase.toLowerCase())) {
          console.log('ELEMENT',element);
          return element;
        }
      });
    },
    [toDosLists]
  );
  return (
    <SearchWrapper>
      <StyledSearchBar placeholder="Search" onChange={handleSearchBarChange} value={searchPhrase} onKeyUp={()=>{
        setToDosLists(handleSearch(searchPhrase))
      }} />


      <SearchResults />
    </SearchWrapper>
  );
};

//@ToDo add some debouncing//
//@To do backend not working !!!!!!!//
//@ToDo  add funtionality on front end side //
