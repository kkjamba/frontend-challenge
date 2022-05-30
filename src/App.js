import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import AllCats from "./components/Pages/AllCats/AllCats";
import FavoriteCats from "./components/Pages/FavoriteCats/FavoriteCats";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function App() {
    const favoriteCats = useSelector(state => state.favoriteCats.favoriteCats)

    useEffect(() => {
        localStorage.setItem('favoriteCats', JSON.stringify(favoriteCats))
    }, [favoriteCats])
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Routes>
                    <Route exact path='/frontend-challenge/' element={<AllCats/>}/>
                    <Route exact path='/frontend-challenge/favorite' element={<FavoriteCats/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
