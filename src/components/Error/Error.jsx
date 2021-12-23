import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import style from './error.module.css';

const Error = function ({ errors }) {
  return (
    <div className={style.errorBlock}>
      <h1>Error!</h1>
      {Array.isArray(errors) ? errors.map((error) => (
        <div className={style.errorItem}>
          {' '}
          {error}
          {' '}
        </div>
      ))
        : <div className={style.errorItem}>{errors}</div>}
      <Button href="/" variant="contained">Go to Home Page</Button>
    </div>
  );
};

Error.propTypes = {
  errors: PropTypes.array.isRequired,
};

export default Error;
