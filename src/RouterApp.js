import React from "react";
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import Board from "./components/Board";
import BDetail from "./components/BDetail";

class RouterApp extends React.Component{
    render(){
        return (
            <HashRouter>
                <Navigation />
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
                <Route path="/board" component={Board} />
                <Route path="/movie-detail" component={Detail} />
                <Route path="/board-detail" component={BDetail} />
                
            </HashRouter>
        );
    }
}

export default RouterApp;