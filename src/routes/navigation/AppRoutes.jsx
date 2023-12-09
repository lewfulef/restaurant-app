

import { Routes, Route } from "react-router-dom";
import Layout from "../../componentes/layout/layout";
import Home from "../../views/Home/Home";
import Nosotros from "../../views/Nosotros/Nosotros";
import Menu from "../../views/Menu/Menu";
import Reservas from "../../views/Reservas/Reservas";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="Home" element={<Home />} />
        <Route path="Nosotros" element={<Nosotros />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Reservas" element={<Reservas />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
