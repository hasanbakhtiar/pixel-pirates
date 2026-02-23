import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/client/Home'
import Product from './pages/client/product/Product'
import ProductDetails from './pages/client/product/ProductDetails'
import NotFoundPage from './pages/client/NotFoundPage'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Container } from 'react-bootstrap'
import Login from './pages/client/auth/Login'
import Dashboard from './pages/admin/Dashboard'
import ProductList from './pages/admin/product/ProductList'
import ProductAdd from './pages/admin/product/ProductAdd'
import ProductEdit from './pages/admin/product/ProductEdit'


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
          <Route path='/login' element={<Login />}></Route>

          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/dashboard/product' element={<ProductList />}></Route>
          <Route path='/dashboard/product/add' element={<ProductAdd />}></Route>
          <Route path='/dashboard/product/edit/:id' element={<ProductEdit />}></Route>


          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default Router