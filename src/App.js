import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyles";

import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CartScreen from "./screens/CartScreen";

import { LogoHeader, NavMenu, CartBar } from "./components/Head";
import { BannerGroup } from "./components/Banner";
import NavBar from "./components/Head/NavBar";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <FixedWrap>
          <NavBar />
        </FixedWrap>
        <BannerGroup />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/products/list" component={ProductListScreen} />
        <Route path="/products/detail" component={ProductDetailScreen} />
        <Route path="/cart" component={CartScreen} />
      </Router>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding-top: 12.5rem;
  width: 75rem;
  background: beige;
  position: relative;
`;

const FixedWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  z-index: 30;
`;

export default App;
