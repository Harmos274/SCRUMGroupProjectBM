import './App.css';
import {Route, Routes} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./utils/theme";
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
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/stock" element={<StockPage/>}/>
                    <Route path="/item-packing" element={<ItemPackingPage/>}/>
                    <Route path="/shopping-basket" element={<ShoppingBasketPage/>}/>
                    <Route path="/change" element={<ChangeCalculatorPage/>}/>
                </Routes>
            </ChakraProvider>
        </div>
    );
}

export default App;
