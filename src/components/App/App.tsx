import React from 'react';
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import TopBar from '../TopBar';
import MainPage from '../../Pages/MainPage';
import DeletedPage from '../../Pages/DeletedPage';
import EditPage from '../../Pages/EditPage';

const App = () => {
  return (
    <div className={styles.root}>
      <TopBar />
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/deleted"
          element={<DeletedPage />}
        />
        <Route
          path="/edit"
          element={<EditPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
