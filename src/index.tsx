import 'shared/config/i18n/i18n';
import 'app/style/index.scss';

import { App } from 'app/App';
import { ErrorBoundary } from 'app/Providers/ErrorBoundary';
import { ThemeProvider } from 'app/Providers/ThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
