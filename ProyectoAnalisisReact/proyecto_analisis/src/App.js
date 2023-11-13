import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import EditUser from './EditUser';
import ShowUsers from './ShowUsers';

import RegisterProduct from './RegisterProduct';
import EditProduct from './EditProduct';
import ShowProducts from './ShowProducts';
import ReparacionesView from './Reparaciones';
import AgregarReparacionForm from './AgregarReparacion';
import EditarReparacion from './EditarReparacion';
function App() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/EditUser/:id" element={<EditUser />} />
        <Route path="/ShowUsers" element={<ShowUsers />} />

        <Route path="/registerProduct" element={<RegisterProduct/>} />
        <Route path="/EditProduct/:code" element={<EditProduct />} />
        <Route path="/ShowProducts" element={<ShowProducts />} />


        <Route path="/reparaciones" element={<ReparacionesView />} />
        <Route path="/agregarReparacion" element={<AgregarReparacionForm />} />
        <Route path="/editarReparacion/:id" element={<EditarReparacion />} />
      </Routes>
    </Router>
  );
}

export default App;
