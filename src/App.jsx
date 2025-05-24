import { useLocation } from "react-router-dom";
import MainRoutes from "./routes/Mainroutes";
import Nav from "./components/Nav";

const App = () => {
  const location = useLocation();

  //  hide Nav on this page
   const hideNavOnPaths = ["/", "/login", "/signup"];

  return (
    <div>
      {!hideNavOnPaths.includes(location.pathname) && <Nav />}
      <MainRoutes />
    </div>
  );
};

export default App;
