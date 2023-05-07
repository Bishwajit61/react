import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch,Routes,BrowserRouter } 
        from "react-router-dom";
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './components/combinedReducer';
import { Provider } from 'react-redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware()));
class AppRoot extends React.Component{

  

    render(){
        return (
      <Provider store={store}>    
       <BrowserRouter>     
       <Routes>
         <Route exact path = "/" element = {<FirstComponent />}/>
         <Route exact path = "/second" element = {<SecondComponent name = "Bishwajit"/>}/>
       </Routes>
       </BrowserRouter>
       </Provider>

        )
    }
}

export default AppRoot;