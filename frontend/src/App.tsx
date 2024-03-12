import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';
import LayoutComponent from './components/layout';
import CashRegisterComponent from './components/cash-register';
import ProductComponent from './components/product';
import TransactionComponent from './components/transaction';
import AnalyticComponent from './components/analytic';
import PersonalOfficeComponent from './components/personal-office';
import AnalyticComponentBars from './components/analytic/analyticBars';
import AnalyticComponentLines from './components/analytic/analyticLines';
import AnalyticComponentPie from './components/analytic/analyticPie';

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/login');
  // }, [navigate]);

  return (
    <LayoutComponent>
      <div className="App">
        <Routes>
          <Route path="/register" element={<AuthRootComponent />} />
          <Route path="/login" element={<AuthRootComponent />} />
          <Route path="/cash-register" element={<CashRegisterComponent />} />
          <Route path="/product" element={<ProductComponent />} />
          <Route path="/transaction" element={<TransactionComponent />} />
          <Route path="/analytic" element={<AnalyticComponent />} />
          <Route path="/personal-office" element={<PersonalOfficeComponent />} />
          <Route path="/analytic/lines" element={<AnalyticComponentLines />} />
          <Route path="/analytic/bars" element={<AnalyticComponentBars />} />
          <Route path="/analytic/pie" element={<AnalyticComponentPie />} />
        </Routes>
      </div>
    </LayoutComponent>
  );
}

export default App;