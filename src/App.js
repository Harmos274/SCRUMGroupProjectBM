import './App.css';
import {Route, Routes} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./utils/theme";
import routesPath from "./utils/router";
import HomePage from "./pages/HomePage";
import ChangeCalculatorPage from "./pages/ChangeCalculatorPage";
import ItemPackingPage from "./pages/ItemPackingPage";
import ShoppingBasketPage from "./pages/ShoppingBasketPage";
import StockPage from "./pages/StockPage";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <ChakraProvider theme={theme}>
                <NavBar/>
                <Routes>
                    <Route path={routesPath.Home} element={<HomePage/>}/>
                    <Route path={routesPath.Stock} element={<StockPage/>}/>
                    <Route path={routesPath.ItemPacking} element={<ItemPackingPage/>}/>
                    <Route path={routesPath.ShoppingBasket} element={<ShoppingBasketPage/>}/>
                    <Route path={routesPath.ChangeCalculator} element={<ChangeCalculatorPage/>}/>
                </Routes>
            </ChakraProvider>
        </div>
    );
}

export default App;
