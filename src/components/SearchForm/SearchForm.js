import React, { useState } from 'react';
import { TYPE, STATUS } from './data';
import filterIcon from '../../assets/icons/filter_alt_white_24dp.svg';
import filterIconOff from '../../assets/icons/filter_alt_off_white_24dp.svg';
import Select from '../Select/Select';

import style from './SearchForm.module.scss';

const optionsInitialState = {};

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setValue] = useState('');
  const [showFilters, toggleFilter] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(optionsInitialState);
  const handleFilterToggle = () => {
    toggleFilter(!showFilters)
    if (showFilters) {
      onSubmit({
        inputValue,
        selectedOptions: optionsInitialState,
      });
      setSelectedOptions(optionsInitialState);
    }
  };

  const changeSelect = type => newValue => {
    setSelectedOptions({
      ...selectedOptions,
      [type]: newValue,
    });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit({
          inputValue,
          selectedOptions,
        });
      }}
    >
      <div className={style.container}>
        <div>
          <label htmlFor="searchShow">Search yor show</label>
          <input
            className={`u-full-width ${style.titleInput}`}
            data-cy="search-form-input-text"
            type="text"
            id="searchShow"
            placeholder="search your favorite show"
            value={inputValue}
            onChange={e => {
              setValue(e.currentTarget.value)
            }}
          />
        </div>
        {showFilters && (
          <div className={style.filterContainer}>
            <div>
              <label htmlFor="searchType">Type</label>
              <Select
                name="status"
                options={TYPE}
                onChange={changeSelect('type')}
              />
            </div>
            <div>
              <label htmlFor="searchStatus">Status</label>
              <Select
                name="type"
                options={STATUS}
                onChange={changeSelect('status')}
              />
            </div>
          </div>
        )}
        <div className={style.actionsContainer}>
          <input
            className="button-primary"
            data-cy="search-form-submit-button"
            type="submit"
            value="Submit"
          />
          <button
            className={`button-primary ${style.filterButton}`}
            data-cy="search-form-filter-button"
            type="button"
            onClick={() => handleFilterToggle()}
          >
            {!showFilters ? (
              <img src={filterIcon} alt="filter icon on" />
            ) : (
              <img src={filterIconOff} alt="filter icon off" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
