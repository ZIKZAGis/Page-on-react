import ReactDOM from 'react-dom';
import App from './components/app/App';

const rootElement = document.getElementById('root')
ReactDOM.render(App({prop: 5, prop2: 17}), rootElement);