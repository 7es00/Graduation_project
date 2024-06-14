import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import 'bootstrap/dist/css/bootstrap.css';
import 'boxicons/css/boxicons.min.css';
import 'remixicon/fonts/remixicon.css';
import { UserProvider } from './components/UserContext'; // Make sure this path is correct
import App from './App';

// A simple error boundary component (you might want to create a separate file for this and make it more robust)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

// Select the root element just once
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <UserProvider>
        <App />
      </UserProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// Setup for performance monitoring
