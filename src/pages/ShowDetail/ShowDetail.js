import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Comments from './components/Comments/Comments';
import { imagePlaceHolder } from '../../utils';
import * as api from '../../repository/shows';
import style from './ShowDetail.module.scss';

const ShowDetail = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    api.getShowDetail(+id)
      .then(item => {
        setDetail(item);
      });
  }, [id]);
  return (
    <MainLayout>
      <div>
        {detail && (
          <div className={style.container}>
            <div className={style.header}>
              <h3 className={style.title} data-cy="show-title">{detail.name}</h3>
              <span data-cy="show-score">
                {detail.rating.average || 0}
              </span>
            </div>
            <div className={style.content}>
              <img
                className={style.img}
                src={imagePlaceHolder(detail.image, 'original')}
                alt={detail.name}
              />
              <div
                className={style.description}
                data-cy="show-summary"
                dangerouslySetInnerHTML={{
                  __html: detail.summary
                }}
              />
            </div>
            <Comments />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ShowDetail;
