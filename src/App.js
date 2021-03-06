import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyles";
// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CartScreen from "./screens/CartScreen";
// Components
import NavBar from "./components/Head/NavBar";
import Footer from "./components/Foot/Footer";
import CartProvider from "./store/cart-context";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <CartProvider>
        <Router>
          <NavBar />
          <Route path="/" component={HomeScreen} exact />
          <Route
            path="/products/list/:menuTitle"
            component={ProductListScreen}
          />
          <Route
            path="/products/detail/:prodTypeName/:prodId"
            component={ProductDetailScreen}
          />
          <Route path="/cart" component={CartScreen} />
        </Router>
      </CartProvider>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 6rem;
  background: #fff;
  position: relative;
`;

export default App;
