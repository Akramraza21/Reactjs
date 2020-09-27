import React, { Component } from "react";
import Layout from "./HOC/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";
import Checkout from "./Container/Checkout/Checkout";
import { Route } from "react-router-dom";
// withRouter HOC used to provide props to the grand childs for route
// BrowserRoute
// Route, exact, path('/',{pathname:'/'.search:'string'}), render={()=>(jsx,props)}
// this.props.(history.push(),goBack(), match.path )

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          {/* <BurgerBuilder /> */}
          {/* <Checkout /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
