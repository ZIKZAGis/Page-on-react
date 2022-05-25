import ReactDOM from 'react-dom';
import { product } from './components/moke/moke';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/components/theme/defaultTheme';
import ProductPage from './components/product-page/product-page'

const rootElement = document.getElementById('root')
ReactDOM.render(
    <ThemeProvider theme={theme}>
            <ProductPage product={product} showInfoInAccordion/>
    </ThemeProvider>,
    rootElement
);