import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { PersistGate } from 'redux-persist/integration/react';

import { ToastContainer } from 'react-toastify';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate
        loading={<h2>Loading app... </h2>}
        persistor={store.persistor}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
