import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './App.css';
import { Header } from './header';
import Map from './Map/map';
import { Landing } from './landing';
// import { Footer } from './footer';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <div>
                    <Header />
                    <div className='wrapper'>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/map' component={Map} />
                    </div>
                    {/* <Footer /> */}
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
