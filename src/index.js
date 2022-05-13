import ReactDOM from 'react-dom';
import { product } from './components/moke/moke';
// import App from './components/app/App';
import ProductPage from './components/product-page/product-page'

const rootElement = document.getElementById('root')
ReactDOM.render(<ProductPage product={product} />, rootElement);
// ReactDOM.render(App({prop: 5, prop2: 17}), rootElement);