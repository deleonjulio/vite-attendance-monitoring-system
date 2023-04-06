import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { AuthenticationProvider } from '../features/login/context/AuthenticationContext';

const ErrorFallback = () => {
  return (
    <div role='alert'>
      <h2>Ooops, something went wrong </h2>
      <button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  );
}

interface AppProviderProps {
    children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <AuthenticationProvider>
          <Router>
            {children}
          </Router>
        </AuthenticationProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}