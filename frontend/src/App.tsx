import React from 'react';
import {Routes, Route} from "react-router-dom";
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';
import LayoutComponent from './components/layout';

function App() {
  return (
    <LayoutComponent>
      <div className="App">
        <Routes>
          <Route element={<PrivateRoute/>}>
            
          </Route>
          <Route path="register" element={<AuthRootComponent/> }/>
          <Route path="login" element={<AuthRootComponent/>} />
        </Routes>
      </div>
    </LayoutComponent>
  );
}

export default App;
