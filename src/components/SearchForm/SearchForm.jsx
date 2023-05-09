// import { Component } from 'react';
import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const valueSearch = event.target.search.value;
    if (!valueSearch.trim()) {
      return 'please type something';
    }

    // if (!query.trim()) {
    //   return toast.warning('please type something');
    // }
    onSubmit(query, valueSearch);
    // onSubmit(valueSearch);
    event.target.reset();
  };

  return (
    <div>
      <h2>SearchForm</h2>
      <SearchFormStyled onSubmit={handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size={20} />
        </FormBtn>
        <InputSearch
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          // value={query}
          onChange={onChange}
        />
      </SearchFormStyled>
    </div>
  );
};
