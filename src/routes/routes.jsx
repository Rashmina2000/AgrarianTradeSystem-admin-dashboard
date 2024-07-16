import { FaTruck } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import Farmers from "../pages/dashboard/Farmers";
import Couriers from "../pages/dashboard/Couriers";
const icon = {
  className: "w-5 h-5 text-inherit",
};

// Routing the Farmer and courier pages -------------------

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <GiFarmer {...icon}/>,
        name: "Farmers",
        path: "/farmers",
        element: <Farmers />,
      },
      {
        icon: <FaTruck {...icon}/>,
        name: "Couriers",
        path: "/couriers",
        element: <Couriers />,
      }
    ],
  }
];

export default routes;
