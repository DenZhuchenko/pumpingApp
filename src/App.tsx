import React, {Suspense} from 'react';
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./components/pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./components/pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className={'app'}>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;