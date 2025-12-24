import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import { ThemeProvider } from './components/theme/theme-provider';

export function render() {
  const html = renderToString(
    <StrictMode>
      <ThemeProvider>
        <App />
        <Analytics mode='production' />
      </ThemeProvider>
    </StrictMode>
  );
  return { html };
}
