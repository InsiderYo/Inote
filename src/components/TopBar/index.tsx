import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';


const TopBar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <div className={styles.template}>
        <div
          className={styles.template_notes}
          onClick={() => navigate('/')}
        >
          Заметки
        </div>
        <div
          className={styles.template_trash}
          onClick={() => navigate('/deleted')}
        >
          Корзина
        </div>
      </div>
      <div className={styles.logo}>INote</div>
    </div>
  );
};

export default TopBar;
