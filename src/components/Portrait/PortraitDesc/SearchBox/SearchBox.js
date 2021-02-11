import React from 'react';
import Input from 'antd/lib/input';

import { MdLocationOn } from 'react-icons/md';

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
      prefix={<MdLocationOn color='#13F1FC' />}
    />
  );
};

export default SearchBox;