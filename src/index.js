import ReactDOM from 'react-dom';
import { product } from './components/moke/moke';
import ProductPage from './components/product-page/product-page'

const rootElement = document.getElementById('root')
ReactDOM.render(<ProductPage product={product} />, rootElement);