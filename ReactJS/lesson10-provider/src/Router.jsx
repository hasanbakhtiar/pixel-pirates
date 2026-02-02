import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./layout/Header"
import { Container } from "react-bootstrap"
import NotFoundPage from "./pages/NotFoundPage"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default Router