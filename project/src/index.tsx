import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Movie = {
  name: 'The Grand Budapest Hotel',
  date: 2014,
  genre: 'Drama',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      featuredMovie={Movie}
    />
  </React.StrictMode>,
);
