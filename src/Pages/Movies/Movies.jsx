import Searchbar from 'components/SearchBar/SearchBar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import { useParams, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const sendSearchKey = e => {
    e.preventDefault();
    // props.getSearchKey(this.state.searchKey);
  };

  return <Searchbar sendSearchKey={sendSearchKey} />;
};

export default Movies;
