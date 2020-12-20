import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

//Domain: dev - n - ezq4sa.au.auth0.com
//Client ID: gPRG7nN0meOJc9fiE6z9EJIQw6ZmtZ0r

ReactDOM.render(
    <Auth0Provider
        domain="dev-n-ezq4sa.au.auth0.com"
        clientId="gPRG7nN0meOJc9fiE6z9EJIQw6ZmtZ0r"
        redirectUri={window.location.origin}
        cacheLocation='localstorage'
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>,
    document.getElementById('root'))
