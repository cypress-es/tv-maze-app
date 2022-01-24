import { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import ListItem from '../../components/ListItem/ListItem';
import SearchForm from '../../components/SearchForm/SearchForm';
import * as api from '../../repository/api';
import style from './HomePage.module.scss';

const HomePage = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    api.getShows()
      .then(items => {
        setItems(items);
      });
  }, []);

  const searchShow = filters => {
    const apiFilter = {
      title: filters.inputValue,
      options: filters.selectedOptions,
    };
    api.getShows(apiFilter)
      .then(items => {
        setItems(items);
      });
  };
  return (
    <MainLayout>
      <SearchForm onSubmit={searchShow} />
      <div className={style.listContainer}>
        {items && items.map(item => (
          <ListItem
            key={item.id}
            id={item.id}
            title={item.name}
            image={item.image.medium}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default HomePage;
