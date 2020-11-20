import 'react-native-gesture-handler';
import React from 'react';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Reduxthunk from 'redux-thunk'
import Reducers from './src/redux/reducers'
import AppMain from './AppMain'

const App= () => {

  const store=createStore(Reducers,{},applyMiddleware(Reduxthunk))

  return (
    <Provider store={store}>
      <AppMain/>
    </Provider>
  );
};

export default App;
