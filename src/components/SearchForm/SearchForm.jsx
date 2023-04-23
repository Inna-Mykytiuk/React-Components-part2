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

    // if (!query.trim()) {
    //   return toast.warning('please type something');
    // }

    onSubmit(query);
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
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onChange}
        />
      </SearchFormStyled>
    </div>
  );
};
