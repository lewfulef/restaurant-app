import Navigation from "../../routes/navigation/navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <nav>
      <Navigation />
      <Outlet />
      </nav>
    )
  }
  
  export default Layout;
  
