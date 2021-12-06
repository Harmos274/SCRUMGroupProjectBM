import './App.css';
import {Route, Routes} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

function App() {
    return (
        <div className="App">
            <ChakraProvider>
                <Routes>
                    <Route path="/" /*element={<PageComponent/>}*//>
                </Routes>
            </ChakraProvider>
        </div>
    );
}

export default App;
