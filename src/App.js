import { Provider } from 'react-redux';
import './App.css';
import Router from './shared/Router';
import store from './redux/config/configStore';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
