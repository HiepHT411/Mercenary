import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';

// ReactDOM.render(
//   <Provider store={store}>
//       <App />
//   </Provider>,
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
  <React.StrictMode>
      <App />
  </React.StrictMode>
    </GlobalStyles>
);

