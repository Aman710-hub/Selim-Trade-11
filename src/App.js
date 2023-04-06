import { Route, Routes } from "react-router";
import routesConfig from "./routes/routesConfig";
import Navbar from "./components/Navbar/Navbar";
import Forms from "./components/Forms/Forms";
import Footer from "./components/Footer/Footer";
import { adminRoutesConfig } from "./admin/routes/adminRoutesConfig";
import "./App.css";
import Home from "./pages/home/Home";
import NavigateBtn from "./components/HomePage/NavigateBtn/NavigateBtn";
import { BrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import Authentication from "./admin/pages/authentication/Authentication";
import ProtectedRoute from "./admin/routes/ProtectedRoute";
import Projects from "./admin/pages/projects/Projects";
import News from "./admin/pages/news/News";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
        {/* ADMIN ROUTES ⬇️ */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/">
            <Route path="projects" element={<Projects />} />
            <Route path="news" element={<News />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
