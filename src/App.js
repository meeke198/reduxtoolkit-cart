import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";


function App() {
  return (
    <Fragment> 
        <Notification/>
      <Layout>
       <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
