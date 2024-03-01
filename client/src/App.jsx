
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
// import AppContext from "./utils/context.jsx";

function App() {
 
  return (
        <BrowserRouter>
        {/* <AppContext props={<h1>hello</h1>}> */}

        <Header/>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/category/:id" element={<Category/>}/>
                  <Route path="/product/:id" element={<SingleProduct/>}/>
                  

                </Routes>
                <Newsletter/>
                <Footer/>

        {/* </AppContext>
         */}
        </BrowserRouter>
  )
}

export default App
