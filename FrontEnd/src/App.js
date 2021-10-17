import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './middleware/Layout';
import Header from './content/HeaderMain';
import './styles/App.scss';

function App() {
  const [locale, setLocale] = useState('en');

  return (
    <IntlProvider locale={locale}>
      <Header />
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;
