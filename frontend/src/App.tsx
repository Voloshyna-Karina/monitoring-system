import React from 'react';
import {Routes, Route} from "react-router-dom";
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute/>}>
          
        </Route>
        <Route path="register" element={<AuthRootComponent/> }/>
        <Route path="login" element={<AuthRootComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
