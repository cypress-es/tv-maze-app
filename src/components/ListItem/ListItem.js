import React from 'react';
import { Link } from 'react-router-dom';
import style from './ListItem.module.scss';

const ListItem= ({ title, image, id }) => (
  <div className={style.container} data-cy="list-item">
    <Link to={`/shows/${id}`}>
      <img className={style.img} src={image} alt={title} />
      <h3 className={style.title}>{title}</h3>
    </Link>
  </div>
);

export default ListItem;
