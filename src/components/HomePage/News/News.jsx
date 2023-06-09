import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./News.module.scss";
import Button from "../../Button/Button";
import New from "../../New/New";
import { getNewsPag } from "../../../redux/user/UserThunk";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const News = () => {
  const { newsPaginationList, isloading } = useSelector(
    (state) => state.newsPagination
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsPag());
  }, []);

  return (
    <div className={styles.news__block}>
      <div className={styles.news__container}>
        <h2 className={styles.news__title}>Последние новости</h2>
        {isloading ? (
          <div className={styles.news__items}>
            <Skeleton width={440} height={300} />
            <Skeleton width={440} height={300} />
            <Skeleton width={440} height={300} />
          </div>
        ) : (
          newsPaginationList.length > 0 && (
            <div className={styles.news__items}>
              {newsPaginationList.map((item) => (
                <New item={item} key={item.id} id={item.id} />
              ))}
            </div>
          )
        )}

        <NavLink className={styles.btn__hover} to="/news">
          <Button text="Все новости" />
        </NavLink>
      </div>
    </div>
  );
};

export default News;
