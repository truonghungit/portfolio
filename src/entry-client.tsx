import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/theme/theme-provider';

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <ThemeProvider>
      <App />
      <Analytics mode='production' />
    </ThemeProvider>
  </StrictMode>
);
