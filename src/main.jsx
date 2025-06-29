import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductListing from './components/ProductListing'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './CSS/style.css'
import './CSS/media.css'
import { Routes, Route } from "react-router";
import Home from './components/Home'
import RootLayout from './components/RootLayout'
import DetailProduct from './components/DetailProduct'
import AddCardPage from './components/AddCardPage'
import WishLisht from './components/WishLisht'
import LoginRegister from './components/LoginRegister'
import DealsPage from './components/DealsPage'
import { HashRouter } from "react-router-dom"; // not from "react-router"



const isProduction = import.meta.env.MODE === 'production';
const base = isProduction ? '/e-commerceWeb' : '/';
createRoot(document.getElementById('root')).render(
  <HashRouter>

    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing/:slug?/:sub_slug?" element={<ProductListing />} />
        <Route path='/details-product/:id' element={< DetailProduct />} />
        <Route path='/card-list' element={< AddCardPage />} />
        <Route path='/wish-list' element={< WishLisht />} />
        <Route path='/login-register' element={< LoginRegister />} />
        <Route path='/deals-page' element={< DealsPage />} />

      </Route>

      {/* Group Route function  */}
      <Route path='admin-panel'>

        <Route path='category'>
          <Route path='add' element={< Home />} />
          <Route path='view' element={< Home />} />
          <Route path='update' element={< Home />} />
        </Route>

        <Route path='product'>
          <Route path='add' element={< Home />} />
          <Route path='view' element={< Home />} />
          <Route path='update' element={< Home />} />
        </Route>

      </Route>
    </Routes>
  </HashRouter>
)
