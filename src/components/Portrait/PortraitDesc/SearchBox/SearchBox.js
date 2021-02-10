import React from 'react';
import Input from 'antd/lib/input';

import classes from './SearchBox.module.scss';

const { Search } = Input;

const SearchBox = () => {
  
  return (
    <Search
      placeholder="Find your place here..."
      enterButton
      allowClear
      size='large'
      style={{
        marginTop: '3rem',
        padding: '1rem',
        borderRadius: '1rem'
      }}
    />
  );
};

export default SearchBox;