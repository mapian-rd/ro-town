import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './context/ContextProvider';

class ErrorBoundary extends React.Component {
  constructor(prop: any) {
    super(prop)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }
  render(): React.ReactNode {
    if ((this.state as any).hasError) {
      return (
        <div className='position-absolute top-50 start-50 translate-middle'>
          <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo" />
          <p className='text-center'>Cat is missing</p>
          <button onClick={() => localStorage.clear()}>Click Here to reset all Data</button>
        </div>
      )
    }
    return (this.props as any).children;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
