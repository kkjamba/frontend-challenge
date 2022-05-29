import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import AllCats from "./components/Pages/AllCats/AllCats";
import FavoriteCats from "./components/Pages/FavoriteCats/FavoriteCats";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Routes>
                    <Route path='/' element={<AllCats/>}/>
                    <Route path='/favorite' element={<FavoriteCats/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
