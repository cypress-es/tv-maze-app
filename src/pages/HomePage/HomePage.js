import { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import ListItem from '../../components/ListItem/ListItem';
import SearchForm from '../../components/SearchForm/SearchForm';
import * as api from '../../repository/shows';
import { imagePlaceHolder } from '../../utils';
import style from './HomePage.module.scss';

const HomePage = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    api.getShows()
      .then(items => {
        setItems(items);
      })
      .catch(() => setError(true));
  }, []);

  const searchShow = filters => {
    const apiFilter = {
      title: filters.inputValue,
      options: filters.selectedOptions,
    };
    console.log(apiFilter);
    api.getShows(apiFilter)
      .then(items => {
        setItems(items);
      })
      .catch(() => setError(true));
  };
  return (
    <MainLayout>
      <SearchForm onSubmit={searchShow} />
      {error && (
        <div className={style.notFound} data-cy="homepage-error">
          <h3>❌</h3>
          <h5>There was an error</h5>
        </div>
      )}
      {items && items.length === 0 && (
        <div className={style.notFound} data-cy="homepage-no-results">
          <h3>🔍</h3>
          <h5>No results</h5>
        </div>
      )}
      <div className={style.listContainer}>
        {items && items.map(item => (
          <ListItem
            key={item.id}
            id={item.id}
            title={item.name}
            image={imagePlaceHolder(item.image, 'medium')}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default HomePage;
