import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'; // Add this import for Provider
import { store } from './Redux/store/stores.js'; // Make sure store is exported correctly

createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
      <App />
    </Provider>

);
