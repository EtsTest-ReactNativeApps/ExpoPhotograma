import React, {useEffect} from 'react';
import axios from 'axios';

import {Provider} from 'react-redux';
import {store} from "./config/store.config";
import AppNavigation from "./navigation/AppNavigation";

//AXIOS HEADERS


export default function App() {
    useEffect(() => {
        axios.defaults.baseURL = 'http://192.168.1.2:3000/api';
        axios.defaults.withCredentials = true;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common.Accept = 'application/json';

    }, []);

    return (
        <Provider store={store}>
          <AppNavigation/>
        </Provider>
    );
  }

