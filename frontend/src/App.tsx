import React, { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom";
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';
import LayoutComponent from './components/layout';
import CashRegisterComponent from './components/cash-register';
import ProductComponent from './components/product';
import TransactionComponent from './components/transaction';
import AnalyticComponent from './components/analytic';
import PersonalOfficeComponent from './components/personal-office';
import { response } from 'express';

function App() {

  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch('/api')
  //   .then(response => response.json())
  //   .then(response => setData(response.message))
  // }, [])

  return (
    <LayoutComponent>
      <div className="App">
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path="/cash-register" element={<CashRegisterComponent/>}/>
            <Route path="/product" element={<ProductComponent/>}/>
            <Route path='/transaction' element={<TransactionComponent/>}/>
            <Route path='/analytic' element={<AnalyticComponent/>}/>
            <Route path='/personal-office' element={<PersonalOfficeComponent/>}/>
          </Route>
          <Route path="register" element={<AuthRootComponent/> }/>
          <Route path="login" element={<AuthRootComponent/>} />
        </Routes>
      </div>
    </LayoutComponent>
  );
}

export default App;
