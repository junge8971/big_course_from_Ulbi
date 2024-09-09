import 'shared/config/i18n/i18n';
import 'app/style/index.scss';

import { App } from 'app/App';
import { ErrorBoundary } from 'app/Providers/ErrorBoundary';
import { StoreProvider } from 'app/Providers/StoreProvider';
import { ThemeProvider } from 'app/Providers/ThemeProvider';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
