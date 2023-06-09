import Authentication from "../admin/pages/authentication/Authentication";
import Home from "../pages/home/Home";
import NewInfo from "../pages/newInfo/NewInfo";
import News from "../pages/news/News";
import ServiceInfo from "../pages/serviceInfo/ServiceInfo";
import ServicePage from "../pages/services/OurServices";
import Works from "../pages/works/Works";

const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/service",
    element: <ServicePage />,
  },
  {
    path: "/service/:id",
    element: <ServiceInfo />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:id",
    element: <NewInfo />,
  },
  {
    path: "/works",
    element: <Works />,
  },
];

export default routesConfig;
