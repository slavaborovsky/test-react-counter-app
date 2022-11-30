import React from 'react';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';
import Container from './layout/Container';

import styles from './App.module.scss';

export default function App() {
  return (
    <main className={styles.main}>
      <Header />

      <Sidebar />

      <Container />

      <Footer />
    </main>
  );
}
